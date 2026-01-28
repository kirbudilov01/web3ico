import { CreditCard, Settings, Users, Network } from 'lucide-react';

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
    <section id="product" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-dark">
            One layer. Many business unlocks.
          </h2>
          <p className="text-base sm:text-lg text-neutral-500 max-w-3xl mx-auto leading-relaxed">
            FABRICBOT ECOSYSTEM turns Telegram into a full commerce stack — not a set of disconnected tools.
            Whether you're a seller, freelancer, creator, agency, or a SaaS team, you can launch a Telegram-native shop, accept payments in 2 taps, and scale with referrals + automated payouts — all inside one Mini App.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
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
      </div>
    </section>
  );
}
