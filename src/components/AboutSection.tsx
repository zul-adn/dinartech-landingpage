import React from 'react';
import { CheckCircle } from 'lucide-react';
import { COMPANY } from '../utils/constants';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                alt="Dinar Tech Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -ml-10 -mt-10 z-0"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-100 rounded-lg -mr-5 -mb-5 z-0"></div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t('about.title')} <span className="text-blue-700">{COMPANY.name}</span>
            </h2>
            <div className="w-20 h-1 bg-blue-900"></div>
            <p className="text-lg text-gray-600">
              {t('about.description')}
            </p>
            <p className="text-lg text-gray-600">
              {COMPANY.mission}
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('about.coreValues')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COMPANY.values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-700 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('about.whyChooseUs')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Experienced Team", description: "10+ years of industry experience" },
                  { title: "Tailored Solutions", description: "Custom solutions for unique business needs" },
                  { title: "Quality Assurance", description: "Rigorous testing for bug-free products" },
                  { title: "Ongoing Support", description: "Dedicated support after project completion" }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;