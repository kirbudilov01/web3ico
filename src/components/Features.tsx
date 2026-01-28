import { MessageSquare, ShoppingCart, Webhook, Users, Lock, Store } from 'lucide-react';
import { Section, Container, SectionTitle } from './ui/Layout';
import { ScrollReveal } from './ui/ScrollReveal';

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Telegram Wallet Checkout',
      description: 'Native Telegram Wallet integration for seamless crypto payments',
    },
    {
      icon: ShoppingCart,
      title: 'Payment Events & Status',
      description: 'Real-time callbacks/webhooks for payment confirmations and partner attribution.',
    },
    {
      icon: Webhook,
      title: 'Webhooks & Events API',
      description: 'Server-side notifications for payment events and order updates',
    },
    {
      icon: Users,
      title: 'Referral / CPA Attribution',
      description: 'Track referral sources and measure affiliate performance',
    },
    {
      icon: Lock,
      title: 'Non-Custodial Architecture',
      description: 'Users maintain full control of their funds at all times',
    },
    {
      icon: Store,
      title: 'Instant Telegram Shops',
      description: 'Launch a crypto commerce shop in Telegram within minutes',
    },
  ];

  return (
    <Section id="features" variant="neutral">
      <Container>
        <SectionTitle
          title="What you unlock with FABRICBOT"
          subtitle="Launch a Telegram-native commerce flow: sell, grow via referrals, and automate payouts — with payments verified on-chain."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="p-8 bg-white rounded-2xl border border-dark/10 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-accent/8 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-accent" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-dark">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#test"
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark text-white rounded-full font-semibold hover:bg-dark/90 transition-all duration-200"
          >
            Try Test
            <MessageSquare size={20} />
          </a>
        </div>
      </Container>
    </Section>
  );
}
