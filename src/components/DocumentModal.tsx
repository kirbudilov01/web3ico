import { X, Download, ExternalLink } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { Document } from '../App';

interface Props {
  document: Document;
  onClose: () => void;
}

export default function DocumentModal({ document, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && e.target === modalRef.current) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    const previouslyFocused = document.activeElement as HTMLElement;
    modalRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const handleOpenInNewTab = () => {
    window.open(document.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
    >
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl border border-[#0B0F1A]/10 overflow-hidden flex flex-col shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-[#0B0F1A]/10 flex-shrink-0">
          <div className="flex items-center gap-4">
            <h3 id="modal-title" className="text-2xl font-bold text-[#0B0F1A]">{document.title}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
              document.status === 'LIVE'
                ? 'text-[#2EE59D] border-[#2EE59D]'
                : 'text-[#6B7280] border-[#6B7280]'
            }`}>
              {document.status}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X size={24} className="text-[#6B7280]" />
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center p-12 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-2xl w-full text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-lg mb-6">
                <svg className="w-12 h-12 text-[#2EE59D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-sm text-[#6B7280] mb-2">Ready to view</p>
              <h4 className="text-2xl font-bold text-[#0B0F1A] mb-3">{document.title}</h4>
              <p className="text-[#6B7280] max-w-md mx-auto">{document.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleOpenInNewTab}
                className="px-8 py-4 bg-[#0B0F1A] text-white rounded-full font-semibold hover:bg-[#1a1f2e] transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                <ExternalLink size={20} />
                Open in new tab
              </button>
              <a
                href={document.downloadUrl}
                download
                className="px-8 py-4 bg-[#2EE59D] text-[#0B0F1A] rounded-full font-semibold hover:bg-[#26cc88] transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Download PDF
              </a>
            </div>

            <button
              onClick={onClose}
              className="mt-6 text-[#6B7280] hover:text-[#0B0F1A] transition-colors duration-200 font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
