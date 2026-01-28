import { X, Download } from 'lucide-react';
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

        <div className="flex-1 overflow-hidden bg-gray-50">
          <iframe
            src={document.url}
            className="w-full h-full min-h-[70vh]"
            title={document.title}
          />
        </div>

        <div className="flex items-center justify-end gap-3 p-6 border-t border-[#0B0F1A]/10 flex-shrink-0">
          <a
            href={document.downloadUrl}
            download
            className="px-6 py-3 bg-[#0B0F1A] text-white rounded-full font-semibold hover:bg-[#1a1f2e] transition-all duration-200 flex items-center gap-2"
          >
            <Download size={18} />
            Download
          </a>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-transparent text-[#0B0F1A] rounded-full font-semibold transition-all duration-200 border-2 border-[#0B0F1A] hover:bg-[#0B0F1A] hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
