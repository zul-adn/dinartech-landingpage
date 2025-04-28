import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { COMPANY } from '../utils/constants';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'about', href: '#about' },
    { key: 'portfolio', href: '#portfolio' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Code className="h-8 w-8 text-blue-900 mr-2" />
            <span className="text-xl font-bold text-blue-900">
              {COMPANY.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-800 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
            <LanguageSwitcher />
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-colors duration-200">
              {t('nav.getStarted')}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              className="text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block text-gray-800 hover:text-blue-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
            <button 
              className="w-full bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.getStarted')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;