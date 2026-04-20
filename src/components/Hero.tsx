interface HeroProps {
  t: (key: string) => any;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4 text-center max-w-6xl">
        {/* Main Title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
          {t('hero.title')}
        </h1>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-green-400 mb-16 max-w-3xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#solution" className="px-12 py-4 bg-green-500 text-black font-bold rounded-lg hover:bg-green-600 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {t('hero.cta1')}
          </a>
          <a href="#contacts" className="px-12 py-4 border-2 border-green-500 text-green-500 font-bold rounded-lg hover:bg-green-500 hover:text-black transition-all duration-300 text-lg">
            {t('hero.cta2')}
          </a>
        </div>
      </div>
    </section>
  );
}
