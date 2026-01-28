import { Sparkles, CheckCircle2, FileText, Calendar, Send } from 'lucide-react';
import { Section, Container } from './ui/Layout';
import { ScrollReveal } from './ui/ScrollReveal';

export default function FutureToken() {
  const tiers = [
    {
      name: 'Donor',
      amount: '10 TON',
      recommended: false,
      vip: false,
      benefits: [
        'Inclusion in the support list',
        'Token share in pre-launch',
      ],
    },
    {
      name: 'Investor',
      amount: '50 TON',
      recommended: false,
      vip: false,
      benefits: [
        'Inclusion in the support list',
        'Token share in pre-launch',
        'Gifts from ecosystem participants',
        'Discounts on ecosystem products',
      ],
    },
    {
      name: 'Own',
      amount: '100 TON',
      recommended: true,
      vip: false,
      benefits: [
        'Inclusion in the support list',
        'Token share in pre-launch',
        'Gifts from ecosystem participants',
        'No transaction fees for sellers until launch',
      ],
    },
    {
      name: 'Premium',
      amount: '1,000 TON',
      recommended: false,
      vip: false,
      benefits: [
        'Inclusion in the support list',
        'Token share in pre-launch',
        'Full placement of your product in ecosystem',
        'No transaction fees until launch',
      ],
    },
    {
      name: 'Boss',
      amount: '10,000 TON',
      recommended: false,
      vip: true,
      benefits: [
        'Inclusion in the support list',
        'Token share in pre-launch',
        'Access to team chats',
        'Direct involvement in the project',
      ],
    },
  ];

  const roadmapYears = [
    {
      year: '2026',
      items: [
        'Scale FABRICBOT ECOSYSTEM (shops + referrals + payouts)',
        'Prelaunch program (statuses + ecosystem gifts)',
        'Token launch (this year)',
      ],
    },
    {
      year: '2027',
      items: [
        'Aggressive merchant growth + partner distribution',
        'Open API adoption + integrations',
        'Improve payouts & attribution automation',
      ],
    },
    {
      year: '2028',
      items: [
        'Network layer expansion (shared catalog + partner marketplace)',
        'New product modules inside the Mini App',
        'Start cross-chain research/prototypes',
      ],
    },
    {
      year: '2029',
      items: [
        'Cross-chain expansion (add new blockchains)',
        'Global scaling + major partnerships',
        'Enterprise-grade tooling',
      ],
    },
    {
      year: '2030+',
      items: [
        'Multi-chain commerce infrastructure',
        'Mature token utility',
        'Long-term ecosystem growth',
      ],
    },
  ];

  return (
    <Section id="prelaunch">
      <Container>
        {/* A) Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-green-600 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-600">LIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-dark">
            Prelaunch Program
          </h2>
          <p className="text-base sm:text-lg text-neutral-500 max-w-3xl mx-auto mb-4 leading-relaxed">
            We're launching the Prelaunch now — early supporters receive a status badge, token allocation, and ecosystem gifts from partners.
          </p>
          <p className="text-base sm:text-lg text-neutral-500 max-w-3xl mx-auto mb-4 leading-relaxed">
            Prelaunch is a crowdfunding inside FABRICBOT: you contribute in TON, unlock your status, and receive bonuses as the ecosystem grows.
          </p>
          <p className="text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto mb-3">
            Built on TON. Growing with Telegram + TON community.
          </p>
          <a
            href="https://ton.org/community"
            className="inline-flex items-center gap-1 text-sm text-dark font-semibold hover:underline mb-8"
          >
            TON Community →
          </a>
          <div className="mt-8">
            <a
              href="https://t.me/fabricbotbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-dark text-white rounded-xl font-semibold hover:bg-[#1a2332] transition-colors duration-300"
            >
              Join Prelaunch
            </a>
          </div>
        </div>

        {/* B) Status Tiers - First Row (3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {tiers.slice(0, 3).map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg ${
                tier.recommended
                  ? 'border-dark border-2 shadow-md'
                  : 'border-neutral-100'
              }`}
            >
              {tier.recommended && (
                <div className="inline-block px-3 py-1 bg-dark text-white text-xs font-semibold rounded-full mb-4">
                  RECOMMENDED
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-dark">
                {tier.name}
              </h3>
              <div className="text-3xl font-bold mb-6 text-dark">
                {tier.amount}
              </div>
              <ul className="space-y-3 min-h-[140px]">
                {tier.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" />
                    <span className="text-sm leading-relaxed text-neutral-500">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Second Row (2 cards centered) */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-2/3">
            {tiers.slice(3, 5).map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg ${
                  tier.vip
                    ? 'border-neutral-500'
                    : 'border-neutral-100'
                }`}
              >
                {tier.vip && (
                  <div className="inline-block px-3 py-1 bg-neutral-100 text-neutral-500 text-xs font-semibold rounded-full mb-4">
                    VIP
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-dark">
                  {tier.name}
                </h3>
                <div className="text-3xl font-bold mb-6 text-dark">
                  {tier.amount}
                </div>
                <ul className="space-y-3 min-h-[140px]">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" />
                      <span className="text-sm leading-relaxed text-neutral-500">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* C) Combined CTA Block */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-100 mb-16 shadow-sm">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-dark">
              Prelaunch → Allocation → ICO
            </h3>
            <p className="text-base sm:text-lg text-neutral-500 leading-relaxed mb-8">
              Join prelaunch to secure allocation first. ICO is planned — token distribution follows community-first rules. Details in the Token Deck.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <a
                href="https://t.me/fabricbotbot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-dark text-white rounded-xl font-semibold hover:bg-[#1a2332] transition-colors duration-300 w-full sm:w-auto justify-center"
              >
                Join Prelaunch
              </a>
              <a
                href="/docs/ico-2026.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-neutral-100 text-dark rounded-xl font-semibold hover:bg-neutral-50 transition-colors duration-300 w-full sm:w-auto justify-center"
              >
                <FileText className="w-4 h-4" />
                Open Token Deck
              </a>
            </div>
            <p className="text-base sm:text-lg text-neutral-500">
              We build on TON and grow with the TON community.
            </p>
          </div>
        </div>

        {/* D) Long-term Roadmap */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full mb-4">
              <Calendar className="w-4 h-4 text-dark" />
              <span className="text-sm font-semibold text-dark">Long-term Vision</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
              Roadmap 2026–2030+
            </h3>
            <div className="mx-auto max-w-[720px] mt-6">
              <p className="text-base sm:text-lg text-neutral-500 leading-relaxed">
                We already have a working product (shops + referrals + payouts + Open API).
                This roadmap shows how we'll scale adoption, expand the network layer, and eventually go multi-chain — while growing token utility over time.
              </p>
              <p className="text-base sm:text-lg text-neutral-500 mt-2">
                Dates may shift as we ship and partner — but the direction stays the same.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
            {roadmapYears.map((phase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-neutral-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl font-bold text-dark mb-4">{phase.year}</div>
                <ul className="space-y-2">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-neutral-500 flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Roadmap CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://t.me/fabricbotbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-dark text-white rounded-xl font-semibold hover:bg-[#1a2332] transition-colors duration-300 w-full sm:w-auto justify-center"
            >
              <Send className="w-4 h-4" />
              Open our app
            </a>
            <a
              href="https://youtube.com/@fabricbotecosystem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-neutral-100 text-dark rounded-xl font-semibold hover:bg-neutral-50 transition-colors duration-300 w-full sm:w-auto justify-center"
            >
              <FileText className="w-4 h-4" />
              More on YouTube
            </a>
          </div>
        </div>

      </Container>
    </Section>
  );
}
