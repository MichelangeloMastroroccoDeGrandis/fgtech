interface FinancialProps {
  t: (key: string) => any;
}

export default function Financial({ t }: FinancialProps) {
  const rows = t('financial.rows') || [];
  const allocation = t('financial.allocation') || [];

  return (
    <section className="fgtech-section">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="fgtech-title">
          {t('financial.title')}
        </h2>

        <div className="mb-16">
          <table className="fgtech-table">
            <thead>
              <tr>
                <th>{t('financial.table.year')}</th>
                <th>{t('financial.table.revenue')}</th>
                <th>{t('financial.table.ebitda')}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row: any, i: number) => (
                <tr key={i}>
                  <td>{row.year}</td>
                  <td>{row.revenue}</td>
                  <td>{row.ebitda}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="fgtech-separator"></div>

        <div>
          <h3 className="fgtech-title">
            {t('financial.investment')}
          </h3>
          <div className="fgtech-bullet-list">
            {allocation.map((item: any, i: number) => (
              <div key={i} className="fgtech-bullet-item">
                <div className="fgtech-bullet-icon"></div>
                <div className="fgtech-bullet-text">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-accent font-bold">{item.amount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
