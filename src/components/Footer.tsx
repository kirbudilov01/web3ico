import { Twitter, Send, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  const links = {
    product: [
      { label: 'Product', href: '#product' },
      { label: 'How it works', href: '#how' },
      { label: 'Features', href: '#features' },
      { label: 'Decks & Docs', href: '#decks' },
      { label: 'Open App', href: 'https://t.me/fabricbotbot', external: true },
    ],
    resources: [
      { label: 'Open API / Payment Gateway', href: '/docs/open-api.pdf' },
      { label: 'Investment Proposal', href: '/docs/investment.pdf' },
      { label: 'Token / ICO Program', href: '/docs/ico-2026.pdf', badge: 'In progress' },
      { label: 'Prelaunch', href: '#prelaunch' },
      { label: 'FAQ', href: '#faq' },
    ],
    legal: [
      { label: 'Disclaimer', href: '#disclaimer' },
      { label: 'Terms of Service', href: '#', comingSoon: true },
      { label: 'Privacy Policy', href: '#', comingSoon: true },
      { label: 'Cookie Policy', href: '#', comingSoon: true },
    ],
  };

  return (
    <footer className="bg-dark border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-16 mb-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/assets/photo_2026-01-15_22.22.00.jpeg"
                alt="FABRICBOT ECOSYSTEM"
                className="h-10"
              />
              <span className="text-lg font-bold text-white">
                FABRICBOT
              </span>
            </div>
            <p className="mb-6 text-sm text-gray-400 leading-relaxed">
              Telegram-native commerce stack: shops, referrals, payouts, Open API.
            </p>
            <div className="flex gap-2">
              <a
                href="https://x.com/kirbudilovfbc"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={18} className="text-neutral-500 hover:!text-accent" />
              </a>
              <a
                href="https://t.me/fabricbotbot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark"
                aria-label="Join our Telegram channel"
              >
                <Send size={18} className="text-neutral-500 hover:!text-accent" />
              </a>
              <a
                href="https://youtube.com/fabricbotecosystem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark"
                aria-label="Watch our videos on YouTube"
              >
                <Youtube size={18} className="text-neutral-500 hover:!text-accent" />
              </a>
              <a
                href="mailto:fabricbotai@gmail.com"
                className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark"
                aria-label="Send us an email"
              >
                <Mail size={18} className="text-neutral-500 hover:!text-accent" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-2.5">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-neutral-500 transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2.5">
              {links.resources.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <a href={link.href} className="text-sm text-neutral-500 transition-colors duration-200 hover:text-accent">
                    {link.label}
                  </a>
                  {link.badge && (
                    <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full">
                      {link.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2.5">
              {links.legal.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <a href={link.href} className="text-sm text-neutral-500 transition-colors duration-200 hover:text-accent">
                    {link.label}
                  </a>
                  {link.comingSoon && (
                    <span className="text-xs text-neutral-500">
                      (Coming soon)
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-neutral-500">
              © 2025 FABRICBOT ECOSYSTEM. All rights reserved.
            </p>
            <p className="text-xs max-w-2xl text-neutral-500 leading-relaxed">
              Disclaimer: Cryptocurrency involves risk. FABRICBOT ECOSYSTEM is a software platform and does not provide investment advice. Token-related materials are informational and may be subject to legal/regulatory requirements.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
