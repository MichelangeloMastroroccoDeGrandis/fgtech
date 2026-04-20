interface FeaturesProps {
  t: (key: string) => any;
}

export default function Features({ t }: FeaturesProps) {
  const items = t('features.items') || [];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#E5E7EB' }}>
          {t('features.title')}
        </h2>

        {/* Features Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item: any, i: number) => (
            <div key={i} className="rounded-lg p-6 border" style={{ backgroundColor: '#020A06', borderColor: '#1E6F4A' }}>
              <div className="flex items-start space-x-4">
                {/* Green Outline Icon */}
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0FA958" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                
                {/* Feature Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#E5E7EB' }}>
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: '#C7D2CE' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
