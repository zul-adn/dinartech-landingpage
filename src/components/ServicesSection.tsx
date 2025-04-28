import React from 'react';
import { Globe, Code, Smartphone, Cog } from 'lucide-react';
import { SERVICES } from '../utils/constants';
import { useLanguage } from '../contexts/LanguageContext';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="h-12 w-12 text-blue-900" />;
      case 'Code':
        return <Code className="h-12 w-12 text-blue-900" />;
      case 'Smartphone':
        return <Smartphone className="h-12 w-12 text-blue-900" />;
      case 'Cog':
        return <Cog className="h-12 w-12 text-blue-900" />;
      default:
        return <Code className="h-12 w-12 text-blue-900" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')} <span className="text-blue-700">{t('services.titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-blue-200"></div>
              <div className="relative z-10">
                <div className="mb-6 bg-blue-50 w-20 h-20 flex items-center justify-center rounded-lg transition-all duration-200 group-hover:bg-blue-100">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="inline-block w-2 h-2 bg-blue-700 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a 
                    href="#contact" 
                    className="text-blue-700 font-medium hover:text-blue-900 inline-flex items-center transition-colors duration-200"
                  >
                    {t('services.learnMore')}
                    <svg 
                      className="ml-2 w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;