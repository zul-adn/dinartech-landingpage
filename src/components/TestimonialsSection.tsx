import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../utils/constants';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')} <span className="text-blue-700">{t('testimonials.titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-blue-100"></div>
              <Quote className="h-8 w-8 text-blue-300 mb-4 relative z-10" />
              <p className="text-gray-700 mb-6 relative z-10">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 rounded-xl p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-800 rounded-full -ml-32 -mt-32 opacity-70"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-800 rounded-full -mr-32 -mb-32 opacity-70"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t('testimonials.cta.title')}</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('testimonials.cta.description')}
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200"
            >
              {t('testimonials.cta.button')}
              <svg 
                className="ml-2 w-5 h-5" 
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
    </section>
  );
};

export default TestimonialsSection;