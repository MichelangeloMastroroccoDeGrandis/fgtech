interface MarketProps {
  t: (key: string) => any;
}

export default function Market({ t }: MarketProps) {
  const drivers = t('market.drivers') || [];

  return (
    <section className="py-20" >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#E5E7EB' }}>
          {t('market.title')}
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Market Information */}
          <div className="flex-1">
            {/* Market Value */}
            <div className="mb-8">
              <div className="text-6xl md:text-7xl font-bold mb-4" style={{ color: '#16C85C' }}>
                $43.7B
              </div>
              <p className="text-xl" style={{ color: '#C7D2CE' }}>
                Precision agriculture market by 2030
              </p>
            </div>

            {/* Market Drivers */}
            <div className="space-y-4">
              {drivers.map((item: string, i: number) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0" style={{ backgroundColor: '#0FA958' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="text-lg" style={{ color: '#C7D2CE' }}>
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Box */}
          <div className="lg:w-96">
            <div className="rounded-lg p-8 border" style={{ backgroundColor: 'rgb(1 17 10)', borderColor: '#1E6F4A' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#0FA958' }}>
                Contact
              </h3>
              
              <div className="space-y-4">
                <div className="text-lg leading-relaxed" style={{ color: '#C7D2CE' }}>
                  Small to medium farms (50-500 hectares) in Europe and beyond seeking affordable, scalable solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
