import { X, Download, ExternalLink } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { Document } from '../App';

interface Props {
  document: Document;
  onClose: () => void;
}

export default function DocumentModal({ document, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  console.log('DocumentModal rendered', document);

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

  const handleDownload = () => {
    const link = window.document.createElement('a');
    link.href = document.downloadUrl;
    link.download = `${document.title}.pdf`;
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open(document.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 id="modal-title" className="text-xl font-bold text-gray-900">Document Preview</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-2xl shadow-lg mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>

            <div className="flex items-center justify-center gap-3 mb-3">
              <h4 className="text-2xl font-bold text-gray-900">{document.title}</h4>
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase ${
                document.status === 'LIVE'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {document.status}
              </span>
            </div>

            <p className="text-gray-600 text-sm max-w-md mx-auto">
              {document.description}
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleDownload}
              className="w-full px-6 py-4 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-all flex items-center justify-center gap-3 text-lg"
            >
              <Download size={24} strokeWidth={2.5} />
              Download PDF
            </button>

            <button
              onClick={handleOpenInNewTab}
              className="w-full px-6 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-3"
            >
              <ExternalLink size={20} />
              Open in new tab
            </button>

            <button
              onClick={onClose}
              className="w-full px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
