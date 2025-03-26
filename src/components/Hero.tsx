import React from 'react';
import { Search, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
          alt="Modern home exterior"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Find Your Dream Home
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Discover the perfect property in Vietnam's most desirable locations.
          Browse through our curated selection of premium real estate.
        </p>

        <div className="mt-10 max-w-xl">
          <div className="bg-white rounded-lg shadow-xl p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="flex items-center">
                  <MapPin className="text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Location"
                    className="ml-2 w-full focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex-1">
                <select className="w-full bg-transparent focus:outline-none text-gray-700">
                  <option value="">Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                </select>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center justify-center">
                <Search size={20} className="mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;