import pytest
from playwright.sync_api import Page, expect

@pytest.fixture(autouse=True)
def navigate_to_home(page: Page):
    """Navigate to the home page before each test."""
    # The base URL is typically configured in pytest.ini or via command line
    page.goto("/")

def test_navbar_tabs_order(page: Page):
    """
    Verify that the navigation tabs are in the correct order:
    Journey, Itinerary, Food, Plan, Gallery.
    """
    nav_links = page.locator(".nav-menu .nav-links")
    
    expected_order = ["Journey", "Itinerary", "Food", "Plan", "Gallery"]
    
    # Verify the total number of links
    expect(nav_links).to_have_count(len(expected_order))
    
    # Verify the text of each link in the specific order
    for i, expected_text in enumerate(expected_order):
        expect(nav_links.nth(i)).to_have_text(expected_text)

def test_plan_precedes_gallery(page: Page):
    """
    Specifically verify that the 'Plan' tab appears immediately before the 'Gallery' tab.
    """
    nav_texts = page.locator(".nav-links").all_inner_texts()
    
    assert "Plan" in nav_texts
    assert "Gallery" in nav_texts
    
    plan_index = nav_texts.index("Plan")
    gallery_index = nav_texts.index("Gallery")
    
    assert plan_index == gallery_index - 1, (
        f"Expected 'Plan' to be immediately before 'Gallery'. "
        f"Found Plan at index {plan_index} and Gallery at index {gallery_index}"
    )

def test_navbar_links_integrity(page: Page):
    """
    Verify that the 'Plan' and 'Gallery' links have the correct href attributes
    and are visible to the user.
    """
    plan_link = page.get_by_role("link", name="Plan")
    gallery_link = page.get_by_role("link", name="Gallery")
    
    expect(plan_link).to_be_visible()
    expect(plan_link).to_have_attribute("href", "#plan")
    
    expect(gallery_link).to_be_visible()
    expect(gallery_link).to_have_attribute("href", "#gallery")

def test_navbar_navigation_interaction(page: Page):
    """
    Verify that clicking the reordered tabs correctly updates the URL hash,
    ensuring functionality is preserved after the reorder.
    """
    # Click Plan and verify hash
    page.get_by_role("link", name="Plan").click()
    expect(page).to_have_url(f"{page.url.split('#')[0]}#plan")
    
    # Click Gallery and verify hash
    page.get_by_role("link", name="Gallery").click()
    expect(page).to_have_url(f"{page.url.split('#')[0]}#gallery")