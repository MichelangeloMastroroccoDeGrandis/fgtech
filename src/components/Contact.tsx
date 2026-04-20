interface ContactProps {
  t: (key: string) => any;
}

export default function Contact({ t }: ContactProps) {
  return (
    <section id="contacts" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#E5E7EB' }}>
          {t('contact.title')}
        </h2>

        {/* Three Section Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {t('contact.sections').map((section: any, i: number) => (
            <div key={i} className="p-8 rounded-lg border" style={{ backgroundColor: '#020A06', borderColor: '#1E6F4A' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#E5E7EB' }}>
                {section.title}
              </h3>
              <p className="text-lg mb-6" style={{ color: '#C7D2CE' }}>
                {section.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Forms Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Request Demo Form */}
          <div className="p-8 rounded-lg border" style={{ backgroundColor: '#00130b', borderColor: '#0FA958' }}>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#16C85C' }}>
              {t('contact.forms.demo.title')}
            </h3>
            <p className="text-base mb-4" style={{ color: '#C7D2CE' }}>
              {t('contact.forms.demo.desc')}
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#E5E7EB' }}>
                  {t('contact.forms.demo.fields.name')}
                </label>
                <input
                  type="text"
                  placeholder={t('contact.forms.demo.placeholders.name')}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#E5E7EB' }}>
                  {t('contact.forms.demo.fields.email')}
                </label>
                <input
                  type="email"
                  placeholder={t('contact.forms.demo.placeholders.email')}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#E5E7EB' }}>
                  {t('contact.forms.demo.fields.farmName')}
                </label>
                <input
                  type="text"
                  placeholder={t('contact.forms.demo.placeholders.farmName')}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button className="w-full px-8 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-600 transition-colors">
                {t('contact.ctas.0.title')}
              </button>
            </form>
          </div>

          {/* Investment Interest Form */}
          <div className="p-8 rounded-lg border" style={{ backgroundColor: '#00130b', borderColor: '#0FA958' }}>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#16C85C' }}>
              {t('contact.forms.investment.title')}
            </h3>
            <p className="text-base mb-4" style={{ color: '#C7D2CE' }}>
              {t('contact.forms.investment.desc')}
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#E5E7EB' }}>
                  {t('contact.forms.investment.fields.name')}
                </label>
                <input
                  type="text"
                  placeholder={t('contact.forms.investment.placeholders.name')}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#E5E7EB' }}>
                  {t('contact.forms.investment.fields.email')}
                </label>
                <input
                  type="email"
                  placeholder={t('contact.forms.investment.placeholders.email')}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#E5E7EB' }}>
                  {t('contact.forms.investment.fields.organization')}
                </label>
                <input
                  type="text"
                  placeholder={t('contact.forms.investment.placeholders.organization')}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#E5E7EB' }}>
                  {t('contact.forms.investment.fields.investmentAmount')}
                </label>
                <input
                  type="text"
                  placeholder={t('contact.forms.investment.placeholders.investmentAmount')}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button className="w-full px-8 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-600 transition-colors">
                {t('contact.ctas.1.title')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
