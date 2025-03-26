import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingBag, Coffee, Ticket, Heart, Percent, Gift, Star, Crown } from 'lucide-react';

const brandCategories = [
  {
    id: 1,
    icon: <Coffee className="w-12 h-12 text-blue-600" />,
    category: "dining",
    brands: [
      {
        name: "Starbucks",
        discount: "15% off",
        image: "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Pizza 4P's",
        discount: "10% off",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: 2,
    icon: <ShoppingBag className="w-12 h-12 text-blue-600" />,
    category: "shopping",
    brands: [
      {
        name: "Uniqlo",
        discount: "20% off",
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Zara",
        discount: "15% off",
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: 3,
    icon: <Heart className="w-12 h-12 text-blue-600" />,
    category: "lifestyle",
    brands: [
      {
        name: "California Fitness",
        discount: "25% off",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Spa Land",
        discount: "30% off",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: 4,
    icon: <Ticket className="w-12 h-12 text-blue-600" />,
    category: "entertainment",
    brands: [
      {
        name: "CGV Cinemas",
        discount: "Buy 1 Get 1",
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Timezone",
        discount: "20% extra credits",
        image: "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];

const benefits = [
  {
    icon: <Percent className="w-8 h-8 text-blue-600" />,
    key: "discounts"
  },
  {
    icon: <Gift className="w-8 h-8 text-blue-600" />,
    key: "points"
  },
  {
    icon: <Star className="w-8 h-8 text-blue-600" />,
    key: "access"
  },
  {
    icon: <Crown className="w-8 h-8 text-blue-600" />,
    key: "events"
  }
];

const MemberBrands = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-blue-700 text-white">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover mix-blend-multiply"
            src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Member brands"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t('memberBrands.title')}
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            {t('memberBrands.subtitle')}
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              {t('memberBrands.benefits.title')}
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {t(`memberBrands.benefits.${benefit.key}`)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Categories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              {t('memberBrands.brands.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {t('memberBrands.brands.description')}
            </p>
          </div>

          <div className="mt-12 space-y-16">
            {brandCategories.map((category) => (
              <div key={category.id}>
                <div className="flex items-center mb-8">
                  {category.icon}
                  <h3 className="ml-4 text-2xl font-bold text-gray-900">
                    {t(`memberBrands.categories.${category.category}`)}
                  </h3>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {category.brands.map((brand, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      <div className="relative h-48">
                        <img
                          src={brand.image}
                          alt={brand.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
                          {brand.discount}
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold text-gray-900">
                          {brand.name}
                        </h4>
                      </div>
                    </div>
                  ))}
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
            <span className="block">{t('memberBrands.title')}</span>
            <span className="block text-blue-200">{t('memberBrands.subtitle')}</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                {t('memberBrands.cta.join')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberBrands;