import { Users } from 'lucide-react';

interface TeamProps {
  t: (key: string) => any;
}

export default function Team({ t }: TeamProps) {
  const members = t('team.members') || [];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#E5E7EB' }}>
          {t('team.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {members.map((member: any, i: number) => (
            <div key={i} className="p-6 rounded-lg" style={{ backgroundColor: '#020A06', borderColor: '#1E6F4A' }}>
              <div className="flex items-start space-x-4">
                {/* Team Icon */}
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Users xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0FA958" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 4 0 0-4 4-4 4v-2a4 4-4 0 0 0-4z"></path>
                    <circle cx="9" cy="8" r="2"></circle>
                    <path d="m9 11 3 3 0 0-6-6-6-6 6"></path>
                  </Users>
                </div>
                
                {/* Member Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#E5E7EB' }}>
                    {member.name}
                  </h3>
                  <p className="text-lg font-semibold mb-2" style={{ color: '#0FA958' }}>
                    {member.role}
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#C7D2CE' }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Statement */}
        <div className="mt-12 p-6 rounded-lg border-l-4" style={{ backgroundColor: '#062F1D', borderColor: '#0FA958' }}>
          <p className="text-lg text-center" style={{ color: '#16C85C' }}>
            {t('team.experience')}
          </p>
        </div>
      </div>
    </section>
  );
}
