import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO } from '../utils/constants';
import { useLanguage } from '../contexts/LanguageContext';

const PortfolioSection: React.FC = () => {
  const { t } = useLanguage();
  const categories = ['All', ...Array.from(new Set(PORTFOLIO.map(item => item.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('portfolio.title')} <span className="text-blue-700">{t('portfolio.titleHighlight')}</span>
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            {t('portfolio.description')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center bg-white text-blue-900 px-4 py-2 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    {t('portfolio.viewProject')}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-white border border-blue-900 text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200"
          >
            {t('portfolio.viewAll')}
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
    </section>
  );
};

export default PortfolioSection;