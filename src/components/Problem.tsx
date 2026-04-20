interface ProblemProps {
  t: (key: string) => any;
}

export default function Problem({ t }: ProblemProps) {
  const items = t('problem.items') || [];

  return (
    <section id="problem" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          {t('problem.title').split(' ').map((word: string, i: number) => 
            word === 'Critical' || word === 'Sfide' || word === 'Critiche' ? 
              <span key={i} className="text-green-500">{word} </span> : 
              <span key={i}>{word} </span>
          )}
        </h2>
        
        {/* Section Subtitle */}
        <p className="text-xl text-gray-400 text-center mb-16 max-w-4xl mx-auto">
          {t('problem.subtitle')}
        </p>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice(0, 5).map((item: any, i: number) => (
            <div key={i} className="border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors duration-300">
              {/* Exclamation Icon */}
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="font-bold">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              
              {/* Card Title */}
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              
              {/* Card Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
