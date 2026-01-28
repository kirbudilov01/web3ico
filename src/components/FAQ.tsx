import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section, Container, SectionTitle } from './ui/Layout';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is FABRICBOT ECOSYSTEM?',
      answer: 'FABRICBOT ECOSYSTEM is a Telegram-native commerce stack for merchants, creators, and developers. It includes instant Telegram shops, referral/CPA tracking, automated payouts, and Open API (payment gateway). All payments happen via TON smart-contracts with on-chain proof.',
    },
    {
      question: 'How does payment settlement work?',
      answer: 'Payments execute via TON smart-contracts and settle directly to your wallet. The platform uses a non-custodial architecture — we never hold or control user funds. Every transaction is recorded on-chain and can be verified independently.',
    },
    {
      question: 'What does "non-custodial" mean for my business?',
      answer: 'Non-custodial means you retain full control of your funds at all times. FABRICBOT ECOSYSTEM routes payments directly to your configured wallet address without intermediary custody. This eliminates counterparty risk and ensures you can always access your revenue.',
    },
    {
      question: 'How does referral and CPA attribution work?',
      answer: 'Each referral link carries a unique identifier tied to the partner. When a user completes a purchase, the smart-contract records the attribution on-chain. Commissions are calculated automatically and can be paid out based on agreed terms (CPA, revenue share, or hybrid).',
    },
    {
      question: 'How do automated payouts work?',
      answer: 'Once a referral or affiliate earns commission, payouts are triggered automatically based on configured thresholds and schedules. Funds are sent directly from the merchant wallet to the partner wallet via smart-contract execution. No manual reconciliation required.',
    },
    {
      question: 'Can I integrate FABRICBOT into my own app or website?',
      answer: 'Yes. The Open API (payment gateway) lets you embed FABRICBOT checkout, track orders, and manage payouts from any platform. Full REST API documentation and webhook support are available. Integration typically takes a few hours for developers.',
    },
    {
      question: 'What is the current product status?',
      answer: 'The core product is live and operational: Telegram shops, referral tracking, automated payouts, and Open API are all in production. We are now scaling adoption and onboarding merchants and partners. The roadmap focuses on network expansion and multi-chain support.',
    },
    {
      question: 'What are the prelaunch program benefits?',
      answer: 'Prelaunch participants receive status tiers based on contribution, ecosystem gifts from other participants, and priority token allocation ahead of the public sale. Early supporters also get discounted platform fees and early access to new features.',
    },
    {
      question: 'When is the token launch and what is the allocation model?',
      answer: 'Public token distribution is planned as part of our 2026 roadmap. Exact timing, pricing, and allocation details are outlined in the Token Deck and Investment Proposal. Prelaunch participants receive priority access before the public sale.',
    },
    {
      question: 'Do I need technical knowledge to get started?',
      answer: 'No. Merchants can launch a Telegram shop in minutes with zero coding. For API integration, basic developer experience is helpful but full documentation and examples are provided. Most use cases require minimal technical setup.',
    },
  ];

  return (
    <Section id="faq" variant="neutral">
      <Container size="narrow">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about FABRICBOT ECOSYSTEM"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-dark/10 overflow-hidden transition-all duration-300 hover:border-accent/40"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-base sm:text-lg font-semibold text-dark pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 leading-relaxed text-neutral-500">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
