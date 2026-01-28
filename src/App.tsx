import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DecksDocuments from './components/DecksDocuments';
import ProductOverview from './components/ProductOverview';
import BusinessBenefits from './components/BusinessBenefits';
import Losses from './components/Losses';
import Features from './components/Features';
import CreatorCommentary from './components/CreatorCommentary';
import FutureToken from './components/FutureToken';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import DocumentModal from './components/DocumentModal';

export interface Document {
  id: string;
  title: string;
  description: string;
  status: 'LIVE' | 'IN PROGRESS';
  url: string;
  downloadUrl: string;
  type: 'pdf' | 'slides';
}

function App() {
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#0B0F1A]">
      <Header />
      <Hero />
      <ProductOverview />
      <BusinessBenefits />
      <Losses />
      <DecksDocuments onDocumentClick={setSelectedDocument} />
      <Features />
      <CreatorCommentary />
      <FutureToken />
      <FAQ />
      <Footer />

      {selectedDocument && (
        <DocumentModal
          document={selectedDocument}
          onClose={() => setSelectedDocument(null)}
        />
      )}
    </div>
  );
}

export default App;
