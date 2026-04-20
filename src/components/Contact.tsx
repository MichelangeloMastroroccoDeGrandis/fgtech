interface ContactProps {
  t: (key: string) => any;
}

export default function Contact({ t }: ContactProps) {
  return (
    <section id="contacts" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#E5E7EB' }}>
          Join Us in Transforming Agriculture
        </h2>

        {/* Three Section Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* For Farmers Card */}
          <div className="p-8 rounded-lg border" style={{ backgroundColor: '#020A06', borderColor: '#1E6F4A' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#E5E7EB' }}>For Farmers</h3>
            <p className="text-lg mb-6" style={{ color: '#C7D2CE' }}>
              Get personalized support and expert guidance for your farm
            </p>
          </div>

          {/* For Investors Card */}
          <div className="p-8 rounded-lg border" style={{ backgroundColor: '#020A06', borderColor: '#1E6F4A' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#E5E7EB' }}>For Investors</h3>
            <p className="text-lg mb-6" style={{ color: '#C7D2CE' }}>
              Explore investment opportunities and partnership terms
            </p>

          </div>

          {/* For Partners Card */}
          <div className="p-8 rounded-lg border" style={{ backgroundColor: '#020A06', borderColor: '#1E6F4A' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#E5E7EB' }}>For Partners</h3>
            <p className="text-lg mb-6" style={{ color: '#C7D2CE' }}>
              Collaborate with us to enhance agricultural solutions
            </p>

          </div>
        </div>

        {/* Contact Forms Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Request Demo Form */}
          <div className="p-8 rounded-lg border" style={{ backgroundColor: '#00130b', borderColor: '#0FA958' }}>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#16C85C' }}>Request a Demo</h3>
            <p className="text-base mb-4" style={{ color: '#C7D2CE' }}>
              See FgTech in action with a personalized demonstration
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#E5E7EB' }}>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#E5E7EB' }}>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#E5E7EB' }}>Farm Name</label>
                <input
                  type="text"
                  placeholder="Your farm name"
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
            <h3 className="text-xl font-bold mb-6" style={{ color: '#16C85C' }}>Investment Interest</h3>
            <p className="text-base mb-4" style={{ color: '#C7D2CE' }}>
              Learn more about investment opportunities and terms
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#E5E7EB' }}>Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#E5E7EB' }}>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#E5E7EB' }}>Organization</label>
                <input
                  type="text"
                  placeholder="Your organization"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#E5E7EB' }}>Investment Amount</label>
                <input
                  type="text"
                  placeholder="Investment range"
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
