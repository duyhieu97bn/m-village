import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">MHome</Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">{t('nav.home')}</Link>
            <Link to="/tim-phong" className="text-gray-700 hover:text-blue-600">{t('nav.rooms')}</Link>
            <Link to="/ve-citizen-program" className="text-gray-700 hover:text-blue-600">{t('nav.citizen')}</Link>
            <Link to="/thuong-hieu-thanh-vien" className="text-gray-700 hover:text-blue-600">{t('nav.brands')}</Link>
            <a href="#" className="text-gray-700 hover:text-blue-600">{t('nav.contact')}</a>
            <div className="flex items-center text-blue-600">
              <Phone size={20} className="mr-2" />
              <span>1800-123-4567</span>
            </div>
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('nav.home')}</Link>
            <Link to="/tim-phong" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('nav.rooms')}</Link>
            <Link to="/ve-citizen-program" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('nav.citizen')}</Link>
            <Link to="/thuong-hieu-thanh-vien" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('nav.brands')}</Link>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{t('nav.contact')}</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;