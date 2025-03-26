import React from 'react';
import { MapPin, Home, Building } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: "Luxury Villa with Pool",
    location: "District 2, Ho Chi Minh City",
    price: "$500,000",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    beds: 4,
    baths: 3,
    area: "350m²"
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Ba Dinh District, Hanoi",
    price: "$280,000",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    beds: 2,
    baths: 2,
    area: "120m²"
  },
  {
    id: 3,
    title: "Beachfront Property",
    location: "Da Nang",
    price: "$750,000",
    type: "House",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    beds: 5,
    baths: 4,
    area: "450m²"
  }
];

const FeaturedProperties = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Properties
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Explore our hand-picked selection of premium properties
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
                  {property.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{property.title}</h3>
                <div className="flex items-center mt-2 text-gray-500">
                  <MapPin size={16} className="mr-1" />
                  <span>{property.location}</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                </div>
                <div className="mt-4 flex justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Home size={16} className="mr-1" />
                    <span>{property.beds} beds</span>
                  </div>
                  <div className="flex items-center">
                    <Building size={16} className="mr-1" />
                    <span>{property.baths} baths</span>
                  </div>
                  <div>
                    <span>{property.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;