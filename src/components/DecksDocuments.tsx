import { FileText, TrendingUp, Coins, ArrowRight } from 'lucide-react';
import type { Document } from '../App';

interface Props {
  onDocumentClick: (doc: Document) => void;
}

export default function DecksDocuments({ onDocumentClick }: Props) {
  const documents: Document[] = [
    {
      id: 'open-api',
      title: 'Open API / Payment Gateway',
      description: 'Checkout button + webhooks/events for instant payment status and order processing.',
      status: 'LIVE',
      url: '/docs/open-api.pdf',
      downloadUrl: '/docs/open-api.pdf',
      type: 'pdf',
    },
    {
      id: 'investment',
      title: 'Investment Proposal',
      description: 'Traction plan, distribution loop, and terms for the current round.',
      status: 'LIVE',
      url: '/docs/investment.pdf',
      downloadUrl: '/docs/investment.pdf',
      type: 'pdf',
    },
    {
      id: 'ico-2026',
      title: 'ICO Program (2026)',
      description: 'Token rollout plan and ecosystem incentives. Draft in progress.',
      status: 'IN PROGRESS',
      url: '/docs/ico-2026.pdf',
      downloadUrl: '/docs/ico-2026.pdf',
      type: 'pdf',
    },
  ];

  const icons = [FileText, TrendingUp, Coins];

  return (
    <section id="decks" className="px-4 sm:px-6 lg:px-8 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-container">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-dark">
            Key materials
          </h2>
          <p className="text-base sm:text-lg text-neutral-500">
            Product, API and investor docs — in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => {
            const Icon = icons[index];
            return (
              <button
                key={doc.id}
                onClick={() => onDocumentClick(doc)}
                className="group relative flex flex-col bg-white rounded-2xl border border-dark/10 hover:border-dark/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-left h-full"
                style={{ padding: '32px' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/8 rounded-xl flex items-center justify-center">
                    <Icon size={24} className="text-accent" strokeWidth={2} />
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
                    doc.status === 'LIVE'
                      ? 'text-accent border-accent'
                      : 'text-neutral-500 border-neutral-500'
                  }`}>
                    {doc.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-dark leading-snug" style={{ minHeight: '56px' }}>
                  {doc.title}
                </h3>

                <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-grow" style={{ minHeight: '48px' }}>
                  {doc.description}
                </p>

                <div className="flex items-center text-dark font-medium text-sm mt-auto">
                  View document
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
