import { CheckCircle2 } from 'lucide-react';

interface TractionProps {
  t: (key: string) => any;
}

export default function Traction({ t }: TractionProps) {
  const metrics = t('traction.metrics') || [];
  const partners = t('traction.partners') || [];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#E5E7EB' }}>
          {t('traction.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Metrics Section */}
          <div className="space-y-6">
            {metrics.map((item: any, i: number) => (
              <div key={i} className="p-6 rounded-lg" style={{ backgroundColor: '#020A06', borderColor: '#1E6F4A' }}>
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#16C85C' }}>
                  {item.value}
                </div>
                <p className="text-xl font-semibold mb-2" style={{ color: '#E5E7EB' }}>{item.label}</p>
                <p className="text-base" style={{ color: '#C7D2CE' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Partners Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#E5E7EB' }}>Key Partnerships</h3>
            <ul className="space-y-4">
              {partners.map((partner: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-lg"
                  style={{ backgroundColor: '#020A06', borderColor: '#1E6F4A' }}
                >
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#0FA958' }} />
                  <span className="text-base" style={{ color: '#C7D2CE' }}>{partner}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
