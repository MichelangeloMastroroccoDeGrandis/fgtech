interface FooterProps {
  t: (key: string) => any;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-black border-t border-accent/20 py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            
            <div className="text-3xl font-bold text-accent mb-3">FgTech</div>
            <p className="text-gray-400 text-lg leading-relaxed">
              IoT for Farming - Transforming Digital Agriculture
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#problem" className="hover:text-accent transition text-lg">
                  Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-accent transition text-lg">
                  Solution
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-accent transition text-lg">
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-accent transition text-lg">
                  info@fgtech.online
                </a>
              </li>
              <li>
                <p className="hover:text-accent transition text-lg">
                  www.fgtech.online
                </p>
              </li>
              <li>
                <p className="hover:text-accent transition text-lg">
                  Italy | Europe
                </p>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-accent/20 pt-8 text-center text-gray-400 text-lg">
          <p>&copy; 2024 FgTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
