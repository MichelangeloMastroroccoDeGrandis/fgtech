import { useState } from 'react';
import { translations } from './translations';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Market from './components/Market';
import Solution from './components/Solution';
import Features from './components/Features';
import Business from './components/Business';
import Competitive from './components/Competitive';
import Traction from './components/Traction';
import Financial from './components/Financial';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

type Language = 'en' | 'it';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation language={language} setLanguage={setLanguage} t={t} />
      <Hero t={t} />
      <Problem t={t} />
      <Market t={t} />
      <Solution t={t} />
      <Features t={t} />
      <Business t={t} />
      <Competitive t={t} />
      <Traction t={t} />
      <Team t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}
