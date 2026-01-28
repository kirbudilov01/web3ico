import { ExternalLink, Twitter, Send, Linkedin } from 'lucide-react';
import { Section, Container, SectionTitle } from './ui/Layout';

export default function CreatorCommentary() {
  return (
    <Section id="creator">
      <Container>
        <SectionTitle
          title="Built by a founder who actually needs it"
          subtitle="I build digital products (Trendvi.media) — and FABRICBOT ECOSYSTEM is the infrastructure I wish existed."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="lg:order-1 order-2 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-dark/10 shadow-sm" style={{ padding: '32px' }}>
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <img
                    src="/assets/founder.jpg"
                    alt="Kirill"
                    className="w-20 h-20 rounded-full object-cover border-2 border-accent/20"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-1">Kirill</h3>
                  <p className="text-neutral-500 text-sm font-medium">Founder • Digital Products Entrepreneur</p>
                </div>
              </div>

              <blockquote className="mb-6">
                <p className="text-2xl font-bold text-dark leading-snug">
                  "I'm not building this as a theory — I need it for my own products. One Mini App where people can pay in 2 taps, and partners can bring customers with automated payouts."
                </p>
              </blockquote>

              <div className="pt-6 border-t border-dark/10">
                <p className="text-sm text-neutral-500 leading-relaxed">
                  I build digital products and growth systems. I'm the creator of Trendvi.media — a tool for creators and teams. Building FABRICBOT ECOSYSTEM started from my own need: payments that convert inside Telegram, plus a partner/referral layer that brings additional customers.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-dark/10 shadow-sm p-6">
              <h4 className="text-sm font-bold text-dark mb-4">My products & channels</h4>

              <div className="space-y-2 mb-6">
                <a
                  href="#trendvi"
                  className="flex items-center gap-2 text-sm text-neutral-500 hover:text-dark transition-colors px-3 py-2 rounded-lg hover:bg-neutral-50"
                >
                  <ExternalLink size={16} />
                  <span>Trendvi.media</span>
                </a>
                <a
                  href="#twitter"
                  className="flex items-center gap-2 text-sm text-neutral-500 hover:text-dark transition-colors px-3 py-2 rounded-lg hover:bg-neutral-50"
                >
                  <Twitter size={16} />
                  <span>X / Twitter</span>
                </a>
                <a
                  href="#telegram"
                  className="flex items-center gap-2 text-sm text-neutral-500 hover:text-dark transition-colors px-3 py-2 rounded-lg hover:bg-neutral-50"
                >
                  <Send size={16} />
                  <span>Telegram</span>
                </a>
                <a
                  href="#linkedin"
                  className="flex items-center gap-2 text-sm text-neutral-500 hover:text-dark transition-colors px-3 py-2 rounded-lg hover:bg-neutral-50"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="pt-4 border-t border-dark/10">
                <p className="text-xs font-semibold text-dark mb-2">Why this matters</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-xs text-neutral-500">
                    <span className="text-accent mt-0.5">•</span>
                    <span>I'm building this for my own funnels and payments first.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-neutral-500">
                    <span className="text-accent mt-0.5">•</span>
                    <span>Then I ship it as a product for other builders.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:order-2 order-1 space-y-6">
            <div className="bg-white rounded-2xl border border-dark/10 shadow-sm overflow-hidden">
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/s1SxJDs2mvY"
                  title="API & Partners overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 border-t border-dark/10">
                <p className="text-sm text-neutral-500">
                  Watch: API & Partners overview (3 min)
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-dark/10 shadow-sm overflow-hidden">
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/VIDEO_ID_PRELAUNCH"
                  title="Prelaunch program + token plan"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 border-t border-dark/10">
                <p className="text-sm text-neutral-500">
                  Watch: Prelaunch program + token plan (3 min)
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
