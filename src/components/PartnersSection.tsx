import React from 'react';
import { PARTNERS } from '../utils/constants';

const PartnersSection: React.FC = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-none w-[200px] mx-8 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;