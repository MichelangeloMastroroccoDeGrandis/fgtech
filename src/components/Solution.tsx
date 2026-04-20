interface SolutionProps {
  t: (key: string) => any;
}

export default function Solution({ t }: SolutionProps) {
  const steps = t('solution.steps') || [];

  return (
    <section id="solution" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#E5E7EB' }}>
          {t('solution.title')}
        </h2>
        <p className="text-xl mb-16" style={{ color: '#C7D2CE' }}>
          {t('solution.subtitle')}
        </p>

        {/* Solution Steps - Horizontal Layout */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          {steps.map((item: any, i: number) => (
            <div key={i} className="flex flex-col items-center text-center max-w-xs">
              {/* Lightning Icon */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#0FA958' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              
              {/* Step Number and Title */}
              <div className="text-2xl font-bold mb-2" style={{ color: '#E5E7EB' }}>
                {item.number}. {item.title}
              </div>
              
              {/* Step Description */}
              <div className="text-base leading-relaxed" style={{ color: '#C7D2CE' }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statistic Section */}
        <div className="rounded-lg p-6 border-l-4" style={{ backgroundColor: '#062F1D', borderColor: '#0FA958' }}>
          <div className="text-2xl font-bold" style={{ color: '#16C85C' }}>
            {t('solution.statistic')}
          </div>
        </div>
      </div>
    </section>
  );
}
