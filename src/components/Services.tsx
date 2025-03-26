import React from 'react';
import { Home, Building2, Key, Users } from 'lucide-react';

const services = [
  {
    icon: <Home className="h-8 w-8 text-blue-600" />,
    title: "Buy Property",
    description: "Find your dream home from our extensive collection of properties across Vietnam."
  },
  {
    icon: <Building2 className="h-8 w-8 text-blue-600" />,
    title: "Sell Property",
    description: "List your property with us and reach thousands of potential buyers."
  },
  {
    icon: <Key className="h-8 w-8 text-blue-600" />,
    title: "Rental Service",
    description: "Discover rental properties or list your property for rent with our expert guidance."
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Property Management",
    description: "Professional property management services for landlords and property investors."
  }
];

const Services = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Comprehensive real estate services tailored to your needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;