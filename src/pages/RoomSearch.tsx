import React, { useState } from 'react';
import { Search, MapPin, Building2, ArrowDownUp, Wifi, Bath, Car, Coffee } from 'lucide-react';

const rooms = [
  {
    id: 1,
    title: "Modern Studio Apartment",
    location: "District 1, Ho Chi Minh City",
    price: "6,000,000 VND",
    area: "35m²",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    amenities: ["wifi", "parking", "bathroom", "kitchen"],
    type: "Studio"
  },
  {
    id: 2,
    title: "Cozy 1-Bedroom Apartment",
    location: "District 2, Ho Chi Minh City",
    price: "8,500,000 VND",
    area: "45m²",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    amenities: ["wifi", "parking", "bathroom", "kitchen"],
    type: "1 Bedroom"
  },
  {
    id: 3,
    title: "Luxury 2-Bedroom Apartment",
    location: "District 7, Ho Chi Minh City",
    price: "12,000,000 VND",
    area: "75m²",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    amenities: ["wifi", "parking", "bathroom", "kitchen"],
    type: "2 Bedrooms"
  },
  {
    id: 4,
    title: "Serviced Apartment",
    location: "Binh Thanh District, Ho Chi Minh City",
    price: "9,500,000 VND",
    area: "50m²",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    amenities: ["wifi", "parking", "bathroom", "kitchen"],
    type: "1 Bedroom"
  }
];

const RoomSearch = () => {
  const [priceRange, setPriceRange] = useState("");
  const [roomType, setRoomType] = useState("");
  const [district, setDistrict] = useState("");

  return (
    <div className="pt-16 bg-gray-50">
      {/* Search Filters */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <select
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              >
                <option value="">All Districts</option>
                <option value="district1">District 1</option>
                <option value="district2">District 2</option>
                <option value="district7">District 7</option>
                <option value="binhthanh">Binh Thanh</option>
              </select>
            </div>

            <div className="relative">
              <Building2 className="absolute left-3 top-3 text-gray-400" size={20} />
              <select
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
              >
                <option value="">Room Type</option>
                <option value="studio">Studio</option>
                <option value="1bedroom">1 Bedroom</option>
                <option value="2bedrooms">2 Bedrooms</option>
              </select>
            </div>

            <div className="relative">
              <ArrowDownUp className="absolute left-3 top-3 text-gray-400" size={20} />
              <select
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="">Price Range</option>
                <option value="0-5">0 - 5 million VND</option>
                <option value="5-10">5 - 10 million VND</option>
                <option value="10-15">10 - 15 million VND</option>
                <option value="15+">15+ million VND</option>
              </select>
            </div>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Search size={20} className="mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Available Rooms
          </h2>
          <span className="text-gray-500">{rooms.length} results found</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
                  {room.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{room.title}</h3>
                <div className="flex items-center mt-2 text-gray-500">
                  <MapPin size={16} className="mr-1" />
                  <span>{room.location}</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{room.price}</span>
                  <span className="text-gray-500">{room.area}</span>
                </div>
                <div className="mt-4 flex justify-between text-gray-500">
                  <div className="flex space-x-4">
                    <Wifi size={20} />
                    <Bath size={20} />
                    <Car size={20} />
                    <Coffee size={20} />
                  </div>
                </div>
                <button className="mt-4 w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomSearch;