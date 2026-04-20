interface FooterProps {
  t: (key: string) => any;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-black border-t border-accent/20 py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            
            <div className="text-3xl font-bold text-accent mb-3">{t('footer.brand')}</div>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.sections.quickLinks.title')}</h4>
            <ul className="space-y-3 text-gray-400">
              {t('footer.sections.quickLinks.links').map((link: any, i: number) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-accent transition text-lg">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.sections.company.title')}</h4>
            <ul className="space-y-3 text-gray-400">
              {t('footer.sections.company.info').map((info: any, i: number) => (
                <li key={i}>
                  {info.href ? (
                    <a href={info.href} className="hover:text-accent transition text-lg">
                      {info.text}
                    </a>
                  ) : (
                    <p className="hover:text-accent transition text-lg">
                      {info.text}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-accent/20 pt-8 text-center text-gray-400 text-lg">
          <p dangerouslySetInnerHTML={{ __html: t('footer.copyright') }}></p>
        </div>
      </div>
    </footer>
  );
}
