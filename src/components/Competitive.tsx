import { Zap } from 'lucide-react';

interface CompetitiveProps {
  t: (key: string) => any;
}

export default function Competitive({ t }: CompetitiveProps) {
  const items = t('competitive.items') || [];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#E5E7EB' }}>
          {t('competitive.title')}
        </h2>

        {/* Two-column grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {items.map((item: any, i: number) => (
            <div
              key={i}
              className="p-8 rounded-lg"
              style={{ backgroundColor: '#020A06' }}
            >
              <div className="flex items-start space-x-4">
                <Zap className="w-12 h-12 flex-shrink-0" style={{ color: '#0FA958' }} />
                <div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#E5E7EB' }}>
                    {item.title}
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: '#C7D2CE' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Concluding Quote */}
        <div className="p-8 rounded-lg border-l-4" style={{ backgroundColor: '#062F1D', borderColor: '#0FA958' }}>
          <p className="text-xl leading-relaxed" style={{ color: '#16C85C' }}>
            {t('competitive.quote')}
          </p>
        </div>
      </div>
    </section>
  );
}
