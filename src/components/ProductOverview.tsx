import { CreditCard, Settings, Users, Network } from 'lucide-react';
import { Section, Container, SectionTitle } from './ui/Layout';

export default function ProductOverview() {
  const layers = [
    {
      icon: CreditCard,
      title: 'Payments layer',
      description: 'Telegram Wallet checkout with on-chain verification. Add "Pay with Telegram Wallet" and keep the flow inside Telegram.',
    },
    {
      icon: Settings,
      title: 'Operations layer',
      description: 'Events, callbacks, and smart-contract execution — plug into your backend. Use a clean integration layer to track payments and automate logic.',
    },
    {
      icon: Users,
      title: 'Distribution layer',
      description: 'Partners, CPA, attribution and rewards without manual reconciliation. Links/codes lock attribution automatically for partner-driven growth.',
    },
    {
      icon: Network,
      title: 'Network layer',
      description: 'Instant shops + shared catalog mechanics for rapid launches. Launch storefronts fast and connect products into a shared ecosystem layer.',
    },
  ];

  return (
    <Section id="product" variant="neutral">
      <Container>
        <SectionTitle
          title="One layer. Many business unlocks."
          subtitle="FABRICBOT ECOSYSTEM turns Telegram into a full commerce stack — not a set of disconnected tools. Whether you're a seller, freelancer, creator, agency, or a SaaS team, you can launch a Telegram-native shop, accept payments in 2 taps, and scale with referrals + automated payouts — all inside one Mini App."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl border border-dark/10 hover:border-accent/40 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-accent/8 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-accent" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark">{layer.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{layer.description}</p>
              </div>
            );
          })}
        </div>

        <p className="text-sm text-center text-neutral-500 italic">
          Businesses can start with one module and expand into the full ecosystem.
        </p>
      </Container>
    </Section>
  );
}
