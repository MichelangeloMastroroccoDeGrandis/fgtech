import { CheckCircle2 } from 'lucide-react';

interface BusinessProps {
  t: (key: string) => any;
}

export default function Business({ t }: BusinessProps) {
  const revenue = t('business.revenue') || [];
  const economics = t('business.economics') || [];

  return (
    <section className="py-32 md:py-48 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">
          {t('business.title')}
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8">
          <div className="space-y-8">
            {revenue.map((item: any, i: number) => (
              <div key={i} className="p-8 border-l-4 border-accent rounded-lg">
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent/10 p-10 rounded-lg border border-accent/20">
            <h3 className="text-2xl font-bold mb-8">Key Economics</h3>
            <ul className="space-y-5">
              {economics.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
