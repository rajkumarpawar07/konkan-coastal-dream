import pytest
import re
from playwright.sync_api import Page, expect

# Configuration for the test environment
# Assuming the local development server is running on port 8080 as per vite.config.ts
BASE_URL = "http://localhost:8080"

@pytest.fixture(scope="function", autouse=True)
def navigate_to_home(page: Page):
    """Navigate to the home page before each test."""
    page.goto(BASE_URL)

def test_seo_metadata_presence(page: Page):
    """
    Verify that SEO meta tags are correctly implemented in the HTML head.
    Ensures that the title, description, and Open Graph tags match the requirements.
    """
    # Verify Page Title
    expect(page).to_have_title("Konkan Trip - Explore the Coastal Paradise")
    
    # Verify Meta Description
    description = page.locator('meta[name="description"]')
    expect(description).to_have_attribute(
        "content", 
        "Discover hidden gems, pristine beaches, and historic forts in the Konkan region. Plan your perfect getaway with our interactive map and curated categories."
    )
    
    # Verify Open Graph Tags for Social Sharing
    expect(page.locator('meta[property="og:title"]')).to_have_attribute(
        "content", "Konkan Trip - Explore the Coastal Paradise"
    )
    expect(page.locator('meta[property="og:type"]')).to_have_attribute("content", "website")
    
    # Verify Canonical Link
    expect(page.locator('link[rel="canonical"]')).to_have_attribute(
        "href", "https://konkan-trip.vercel.app/"
    )

def test_pwa_manifest_and_theme_config(page: Page):
    """
    Verify that PWA-related tags and manifest links are present in the document.
    """
    # Check for manifest link (VitePWA injection)
    manifest_link = page.locator('link[rel="manifest"]')
    expect(manifest_link).to_be_attached()
    
    # Check theme color defined in vite.config.ts
    theme_meta = page.locator('meta[name="theme-color"]')
    expect(theme_meta).to_have_attribute("content", "#0ea5e9")
    
    # Check for PWA icons
    apple_touch_icon = page.locator('link[rel="apple-touch-icon"]')
    expect(apple_touch_icon).to_be_attached()

def test_itinerary_filtering_by_category(page: Page):
    """
    Verify that clicking category buttons updates the URL search parameters
    and correctly filters the itinerary view.
    """
    # 1. Test 'Beaches' filter
    beach_button = page.get_by_role("button", name=re.compile(r"Beaches", re.I))
    beach_button.click()
    
    # Verify URL parameter update
    expect(page).to_have_url(re.compile(r"\?category=beach"))
    
    # Verify the button reflects active state (using shadcn/ui primary classes)
    expect(beach_button).to_have_class(re.compile(r"bg-primary"))

    # 2. Test 'Forts' filter
    fort_button = page.get_by_role("button", name=re.compile(r"Forts", re.I))
    fort_button.click()
    expect(page).to_have_url(re.compile(r"\?category=fort"))
    
    # 3. Test 'All Stops' reset
    all_button = page.get_by_role("button", name=re.compile(r"All Stops", re.I))
    all_button.click()
    
    # Verify URL parameter is removed
    current_url = page.url
    assert "category=" not in current_url

def test_interactive_map_rendering_and_markers(page: Page):
    """
    Verify that the Leaflet map renders correctly with markers and route polyline.
    """
    # Ensure the Leaflet container is visible
    map_container = page.locator(".leaflet-container")
    expect(map_container).to_be_visible()
    
    # Verify markers are rendered (Leaflet uses .leaflet-marker-icon)
    # Based on konkanRoute data: Mumbai, Alibaug, Murud-Janjira, etc.
    markers = page.locator(".leaflet-marker-icon")
    expect(markers).to_have_count(ge=3)
    
    # Verify Polyline (route line) is rendered as an SVG path
    route_line = page.locator("path.leaflet-interactive")
    expect(route_line).to_be_attached()

def test_map_marker_interaction(page: Page):
    """
    Verify that clicking a map marker opens a popup with location details.
    """
    # Click the first marker (Mumbai)
    marker = page.locator(".leaflet-marker-icon").first
    marker.click()
    
    # Verify popup content appears
    popup = page.locator(".leaflet-popup-content")
    expect(popup).to_be_visible()
    
    # Verify specific text in popup (based on konkanRoute description)
    expect(popup).to_contain_text("The starting point of the Konkan journey")

def test_deep_linking_with_filters(page: Page):
    """
    Verify that navigating directly to a URL with a category parameter 
    initializes the app with the correct filter active.
    """
    page.goto(f"{BASE_URL}/?category=nature")
    
    # Verify the 'Nature' button is active on load
    nature_button = page.get_by_role("button", name=re.compile(r"Nature", re.I))
    expect(nature_button).to_have_class(re.compile(r"bg-primary"))

def test_responsive_pwa_layout(page: Page):
    """
    Verify the layout remains functional on mobile viewports, 
    which is critical for PWA usability.
    """
    # Set mobile viewport
    page.set_viewport_size({"width": 375, "height": 812})
    
    # Navbar should be present
    expect(page.locator("nav")).to_be_visible()
    
    # Map should still be accessible
    expect(page.locator(".leaflet-container")).to_be_visible()
    
    # Filter buttons should be visible (likely in a scrollable row or wrapped)
    expect(page.get_by_role("button", name="All Stops")).to_be_visible()