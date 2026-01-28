import { useState } from 'react';
import { Section, Container } from './ui/Layout';

export default function Losses() {
  const [imageError, setImageError] = useState(false);

  const bullets = [
    'Less drop-off at checkout → more paid users',
    'Partner growth without spreadsheets',
    'Launch faster without building a full store stack',
  ];

  return (
    <Section id="losses">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-dark">
              Imagine how much revenue your competitors are losing.
            </h2>

            <p className="text-base sm:text-lg text-dark mb-4 leading-relaxed">
              They run complex referral flows, manual payouts, and clunky payment redirects — so users drop before paying.
            </p>

            <p className="text-base sm:text-lg text-dark mb-8 leading-relaxed">
              With FABRICBOT ECOSYSTEM, checkout happens inside Telegram (2 taps), referrals are instant, and payouts are automated — all in one Mini App.
            </p>

            <div className="space-y-3 mb-6">
              {bullets.map((bullet, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-dark rounded-full mt-2.5"></div>
                  <span className="text-dark leading-relaxed font-medium">{bullet}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-neutral-500 italic">
              Some payment gateways exist — but they often feel like a redirect maze, not a native Telegram flow.
            </p>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="w-full max-w-[520px] bg-white rounded-2xl p-6 shadow-lg border border-dark/10">
              <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl overflow-hidden">
                {!imageError ? (
                  <img
                    src="/assets/visuals/losses.png"
                    alt="Competitor funnel vs 2-tap Telegram flow"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-dark/5 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <svg className="w-8 h-8 text-dark/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-semibold text-dark mb-1">Visual Placeholder</p>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        Insert visual: competitor funnel vs 2-tap Telegram flow
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
