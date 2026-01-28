import { Section, Container } from './ui/Layout';
import { ScrollReveal } from './ui/ScrollReveal';

export default function Hero() {
  return (
    <Section className="flex items-center pt-24 sm:pt-32">
      <Container className="text-center">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
            <span className="text-dark">FABRICBOT ECOSYSTEM — commerce layer for </span>
            <span className="text-accent">Telegram</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-base sm:text-lg lg:text-xl mb-12 mx-auto text-neutral-500 leading-relaxed max-w-3xl">
            FABRICBOT ECOSYSTEM is <span className="font-semibold text-dark">one Telegram Mini App</span> where instant shops, referrals, and automated payouts run as a single system — executed by TON smart contracts.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://t.me/fabricbotbot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-dark text-white rounded-full font-semibold hover:bg-dark/90 hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Open App
            </a>
            <a
              href="#decks"
              className="px-8 py-4 bg-transparent text-dark rounded-full font-semibold transition-all duration-200 border-2 border-dark hover:bg-dark hover:text-white hover:scale-105"
            >
              View Decks
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
