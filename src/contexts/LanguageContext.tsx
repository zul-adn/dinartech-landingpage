import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero Section
    'hero.tagline': 'Digital Solutions Provider',
    'hero.description': 'We build exceptional digital experiences that drive business growth and user satisfaction.',
    'hero.getInTouch': 'Get In Touch',
    'hero.ourServices': 'Our Services',
    'hero.since': 'Crafting exceptional digital experiences since',
    
    // Services Section
    'services.title': 'Our',
    'services.titleHighlight': 'Services',
    'services.description': 'We provide comprehensive digital solutions to help your business thrive in the digital landscape. From websites to complex applications, we\'ve got you covered.',
    'services.learnMore': 'Learn More',
    
    // About Section
    'about.title': 'About',
    'about.description': 'Founded in 2018, Dinar Tech Mediatama has established itself as a leading digital solutions provider in Indonesia. We combine technical expertise with creative thinking to deliver exceptional digital experiences for our clients.',
    'about.coreValues': 'Our Core Values',
    'about.whyChooseUs': 'Why Choose Us?',
    
    // Portfolio Section
    'portfolio.title': 'Our',
    'portfolio.titleHighlight': 'Portfolio',
    'portfolio.description': 'Explore our diverse portfolio of successful projects that showcase our expertise and innovation.',
    'portfolio.viewProject': 'View Project',
    'portfolio.viewAll': 'View All Projects',
    
    // Testimonials Section
    'testimonials.title': 'Client',
    'testimonials.titleHighlight': 'Testimonials',
    'testimonials.description': 'Don\'t just take our word for it. Hear what our clients have to say about their experience working with us.',
    'testimonials.cta.title': 'Ready to Transform Your Business?',
    'testimonials.cta.description': 'Let\'s discuss how we can help you achieve your digital goals and drive your business forward.',
    'testimonials.cta.button': 'Get Started Today',
    
    // Contact Section
    'contact.title': 'Get In',
    'contact.titleHighlight': 'Touch',
    'contact.description': 'Have a project in mind or want to learn more about our services? Reach out to us today!',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.followUs': 'Follow Us',
    'contact.info.businessHours': 'Business Hours',
  },
  id: {
    // Header
    'nav.home': 'Beranda',
    'nav.services': 'Layanan',
    'nav.about': 'Tentang',
    'nav.portfolio': 'Portofolio',
    'nav.testimonials': 'Testimoni',
    'nav.contact': 'Kontak',
    'nav.getStarted': 'Mulai',
    
    // Hero Section
    'hero.tagline': 'Penyedia Solusi Digital',
    'hero.description': 'Kami membangun pengalaman digital yang luar biasa untuk mendorong pertumbuhan bisnis dan kepuasan pengguna.',
    'hero.getInTouch': 'Hubungi Kami',
    'hero.ourServices': 'Layanan Kami',
    'hero.since': 'Menciptakan pengalaman digital luar biasa sejak',
    
    // Services Section
    'services.title': 'Layanan',
    'services.titleHighlight': 'Kami',
    'services.description': 'Kami menyediakan solusi digital komprehensif untuk membantu bisnis Anda berkembang di era digital. Dari website hingga aplikasi kompleks, kami siap membantu.',
    'services.learnMore': 'Pelajari Lebih Lanjut',
    
    // About Section
    'about.title': 'Tentang',
    'about.description': 'Didirikan pada tahun 2018, Dinar Tech Mediatama telah memantapkan diri sebagai penyedia solusi digital terkemuka di Indonesia. Kami menggabungkan keahlian teknis dengan pemikiran kreatif untuk memberikan pengalaman digital yang luar biasa bagi klien kami.',
    'about.coreValues': 'Nilai-Nilai Kami',
    'about.whyChooseUs': 'Mengapa Memilih Kami?',
    
    // Portfolio Section
    'portfolio.title': 'Portofolio',
    'portfolio.titleHighlight': 'Kami',
    'portfolio.description': 'Jelajahi portofolio beragam proyek sukses kami yang menunjukkan keahlian dan inovasi kami.',
    'portfolio.viewProject': 'Lihat Proyek',
    'portfolio.viewAll': 'Lihat Semua Proyek',
    
    // Testimonials Section
    'testimonials.title': 'Testimoni',
    'testimonials.titleHighlight': 'Klien',
    'testimonials.description': 'Jangan hanya percaya kata-kata kami. Dengarkan apa yang klien kami katakan tentang pengalaman mereka bekerja dengan kami.',
    'testimonials.cta.title': 'Siap Mentransformasi Bisnis Anda?',
    'testimonials.cta.description': 'Mari diskusikan bagaimana kami dapat membantu Anda mencapai tujuan digital dan mendorong bisnis Anda maju.',
    'testimonials.cta.button': 'Mulai Sekarang',
    
    // Contact Section
    'contact.title': 'Hubungi',
    'contact.titleHighlight': 'Kami',
    'contact.description': 'Punya proyek dalam pikiran atau ingin tahu lebih banyak tentang layanan kami? Hubungi kami hari ini!',
    'contact.form.name': 'Nama Lengkap',
    'contact.form.email': 'Alamat Email',
    'contact.form.subject': 'Subjek',
    'contact.form.message': 'Pesan',
    'contact.form.send': 'Kirim Pesan',
    'contact.info.title': 'Informasi Kontak',
    'contact.info.address': 'Alamat',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Telepon',
    'contact.info.followUs': 'Ikuti Kami',
    'contact.info.businessHours': 'Jam Kerja',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};