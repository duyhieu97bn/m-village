import React from 'react';
import { Shield, Users, Gift, Star, Award, Heart, Coffee, Wifi, Tv, Home } from 'lucide-react';

const benefits = [
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: "Priority Booking",
    description: "Get early access to new properties and exclusive room selections"
  },
  {
    icon: <Gift className="w-12 h-12 text-blue-600" />,
    title: "Special Discounts",
    description: "Enjoy member-only discounts on monthly rent and services"
  },
  {
    icon: <Star className="w-12 h-12 text-blue-600" />,
    title: "Loyalty Points",
    description: "Earn points for every month of stay, redeem for rewards"
  },
  {
    icon: <Award className="w-12 h-12 text-blue-600" />,
    title: "Premium Services",
    description: "Access to premium amenities and exclusive events"
  }
];

const features = [
  {
    icon: <Coffee className="w-8 h-8 text-blue-600" />,
    title: "Community Events",
    description: "Regular social gatherings and networking opportunities"
  },
  {
    icon: <Wifi className="w-8 h-8 text-blue-600" />,
    title: "High-Speed Internet",
    description: "Premium internet access in all common areas"
  },
  {
    icon: <Tv className="w-8 h-8 text-blue-600" />,
    title: "Entertainment",
    description: "Access to entertainment facilities and game rooms"
  },
  {
    icon: <Home className="w-8 h-8 text-blue-600" />,
    title: "Flexible Living",
    description: "Easy room transfers and lease extensions"
  }
];

const CitizenProgram = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-blue-700 text-white">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover mix-blend-multiply"
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            alt="Community living"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            MHome Citizen Program
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Join our exclusive community and enjoy premium benefits designed to make your stay more comfortable and rewarding.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Member Benefits
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Exclusive advantages for our valued community members
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">{benefit.icon}</div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Program Features
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Everything you need for a comfortable living experience
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4"
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to join our community?</span>
            <span className="block text-blue-200">
              Become a citizen today and enjoy exclusive benefits.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenProgram;