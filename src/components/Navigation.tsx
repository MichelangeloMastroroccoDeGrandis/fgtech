interface NavigationProps {
  language: 'en' | 'it';
  setLanguage: (lang: 'en' | 'it') => void;
  t: (key: string) => any;
}

export default function Navigation({ language, setLanguage, t }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur border-b border-accent/30 z-50">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-3">
          <div className="text-3xl font-bold text-accent"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-leaf w-6 h-6" data-loc="client/src/pages/Home.tsx:32"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg></div>
          <span className="text-2xl font-bold">FgTech</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollToSection('problem')}
            className="text-lg hover:text-accent transition font-medium"
          >
            {t('nav.problem')}
          </button>
          <button
            onClick={() => scrollToSection('solution')}
            className="text-lg hover:text-accent transition font-medium"
          >
            {t('nav.solution')}
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="text-lg hover:text-accent transition font-medium"
          >
            {t('nav.features')}
          </button>
          <button
            onClick={() => scrollToSection('contacts')}
            className="text-lg hover:text-accent transition font-medium"
          >
            {t('nav.contact')}
          </button>
        </div>

        <div className="flex items-center gap-2 bg-accent/10 rounded-lg p-2 border border-accent/20">
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-2 rounded font-semibold transition text-lg ${
              language === 'en' ? 'bg-accent text-black' : 'hover:text-accent'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('it')}
            className={`px-4 py-2 rounded font-semibold transition text-lg ${
              language === 'it' ? 'bg-accent text-black' : 'hover:text-accent'
            }`}
          >
            IT
          </button>
        </div>
      </div>
    </nav>
  );
}
