import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY } from '../utils/constants';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm animate-fade-in-up">
              {t('hero.tagline')}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              {COMPANY.name}
              <span className="block text-blue-700 mt-2">{COMPANY.tagline}</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              {t('hero.description')} {COMPANY.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {t('hero.getInTouch')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center bg-white text-blue-900 border border-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                {t('hero.ourServices')}
              </a>
            </div>
          </div>
          
          <div className="relative lg:h-[500px] w-full overflow-hidden rounded-xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-teal-600/70 mix-blend-multiply"></div>
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="Dinar Tech Team Collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-lg font-medium">
                {t('hero.since')} {COMPANY.founded}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;