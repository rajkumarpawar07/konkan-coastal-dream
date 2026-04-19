import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for Leaflet default icon issue in modern build environments
// This ensures markers show up correctly by using CDN-hosted assets
if (typeof window !== 'undefined') {
  // @ts-ignore
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
}

interface Location {
  name: string;
  position: [number, number];
  description: string;
}

const konkanRoute: Location[] = [
  { name: 'Mumbai', position: [19.0760, 72.8777], description: 'The starting point of the Konkan journey.' },
  { name: 'Alibaug', position: [18.6411, 72.8722], description: 'Famous for its beaches and historic forts.' },
  { name: 'Murud-Janjira', position: [18.2847, 72.9633], description: 'Home to the unconquered sea fort.' },
  { name: 'Ganpatipule', position: [17.1450, 73.2670], description: 'Pristine beaches and a famous Ganesha temple.' },
  { name: 'Ratnagiri', position: [16.9902, 73.3120], description: 'Known for Alphonso mangoes and scenic coastlines.' },
  { name: 'Malvan', position: [16.0514, 73.4687], description: 'Famous for Sindhudurg Fort and scuba diving.' },
  { name: 'Tarkarli', position: [16.0350, 73.4910], description: 'A coral beach known for clear waters.' },
  { name: 'Goa', position: [15.4909, 73.8278], description: 'The final destination with vibrant culture.' },
];

const JourneyMap: React.FC = () => {
  const polylinePositions = konkanRoute.map(loc => loc.position);
  const center: [number, number] = [17.5, 73.5];

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200 z-0">
      <MapContainer 
        center={center} 
        zoom={7} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline 
          positions={polylinePositions} 
          pathOptions={{ color: '#3b82f6', weight: 4, opacity: 0.7, dashArray: '10, 10' }} 
        />
        {konkanRoute.map((loc, index) => (
          <Marker key={index} position={loc.position}>
            <Popup>
              <div className="p-1 min-w-[150px]">
                <h3 className="font-bold text-blue-600 text-lg">{loc.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{loc.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default JourneyMap;