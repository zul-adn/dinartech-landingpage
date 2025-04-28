import React from 'react';
import { Code, ChevronRight } from 'lucide-react';
import { COMPANY, CONTACT } from '../utils/constants';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-white mr-2" />
              <span className="text-xl font-bold">{COMPANY.name}</span>
            </div>
            <p className="text-blue-100 mb-6">
              {COMPANY.tagline}. {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {Object.entries(CONTACT.social).map(([platform, url]) => (
                <a 
                  key={platform}
                  href={url}
                  className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  <span className="sr-only">{platform}</span>
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('nav.services')}</h3>
            <ul className="space-y-4">
              {['Website Development', 'Web Application Development', 'Mobile App Development', 'Automation Solutions', 'UI/UX Design', 'Digital Marketing'].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-4">
              {[
                { key: 'home', href: '#home' },
                { key: 'about', href: '#about' },
                { key: 'services', href: '#services' },
                { key: 'portfolio', href: '#portfolio' },
                { key: 'testimonials', href: '#testimonials' },
                { key: 'contact', href: '#contact' }
              ].map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.newsletter')}</h3>
            <p className="text-blue-100 mb-4">
              {t('footer.newsletterDescription')}
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  className="px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-r-lg transition-colors duration-200"
                >
                  {t('footer.subscribe')}
                </button>
              </div>
            </form>
            <p className="text-blue-200 text-sm">
              {t('footer.privacyNotice')}
            </p>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} {COMPANY.name}. {t('footer.allRightsReserved')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors duration-200">
                {t('footer.privacyPolicy')}
              </a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors duration-200">
                {t('footer.termsOfService')}
              </a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors duration-200">
                {t('footer.sitemap')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;