// src/components/PlaceCard.tsx
import React from 'react';
import { Place } from '@/types/place';

interface PlaceCardProps {
  place: Place;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col">
      {/* รูปภาพสถานที่ */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={place.imageUrls}
          alt={place.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-full text-gray-700 shadow-sm">
          {place.category}
        </span>
      </div>

      {/* เนื้อหาการ์ด */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800 line-clamp-1">{place.name}</h3>
            <span className="flex items-center text-sm font-semibold text-amber-500">
              ★ {place.charges}
            </span>
          </div>
          <p className="text-sm font-medium text-emerald-600 mb-2">📍 {place.province}</p>
          <p className="text-gray-600 text-sm line-clamp-2">{place.description}</p>
        </div>
      </div>
    </div>
  );
};