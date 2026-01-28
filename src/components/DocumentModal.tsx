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

    window.document.addEventListener('keydown', handleEscape);
    window.document.addEventListener('mousedown', handleClickOutside);

    const previouslyFocused = window.document.activeElement as HTMLElement;
    modalRef.current?.focus();

    return () => {
      window.document.removeEventListener('keydown', handleEscape);
      window.document.removeEventListener('mousedown', handleClickOutside);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const handleDownload = () => {
    const link = window.document.createElement('a');
    link.href = document.downloadUrl;
    link.download = `${document.title}.pdf`;
    link.click();
  };

  const handleOpenInNewTab = () => {
    window.open(document.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#0B0F1A]/10 overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-[#0B0F1A]/10">
          <h3 id="modal-title" className="text-xl font-bold text-[#0B0F1A]">Document Preview</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X size={20} className="text-[#6B7280]" />
          </button>
        </div>

        <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#2EE59D] to-[#26cc88] rounded-2xl shadow-lg mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>

            <div className="flex items-center justify-center gap-3 mb-3">
              <h4 className="text-2xl font-bold text-[#0B0F1A]">{document.title}</h4>
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                document.status === 'LIVE'
                  ? 'bg-[#2EE59D] text-[#0B0F1A]'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {document.status}
              </span>
            </div>

            <p className="text-[#6B7280] text-sm max-w-md mx-auto leading-relaxed">
              {document.description}
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleDownload}
              className="w-full px-6 py-4 bg-gradient-to-r from-[#2EE59D] to-[#26cc88] text-[#0B0F1A] rounded-xl font-bold hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 text-lg"
            >
              <Download size={24} strokeWidth={2.5} />
              Download PDF
            </button>

            <button
              onClick={handleOpenInNewTab}
              className="w-full px-6 py-4 bg-[#0B0F1A] text-white rounded-xl font-semibold hover:bg-[#1a1f2e] transition-all duration-200 flex items-center justify-center gap-3"
            >
              <ExternalLink size={20} />
              Open in new tab
            </button>

            <button
              onClick={onClose}
              className="w-full px-6 py-3 text-[#6B7280] hover:text-[#0B0F1A] hover:bg-gray-100 rounded-xl transition-all duration-200 font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
