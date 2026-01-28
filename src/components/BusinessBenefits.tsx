import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function BusinessBenefits() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    '/assets/screens/1.png',
    '/assets/screens/2.png',
    '/assets/screens/3.png',
    '/assets/screens/4.png',
    '/assets/screens/5.png',
    '/assets/screens/6.png',
  ];

  const benefits = [
    'Higher checkout conversion — customers pay in 1 tap via Telegram Wallet.',
    'More sales without a website — launch a Telegram-native shop in minutes.',
    'Faster growth loop — partners share links/codes and attribution locks automatically.',
    'No spreadsheet payouts — rewards are calculated and paid out automatically.',
    'Lower disputes and fraud — payouts and attribution are transparent and verifiable on-chain.',
    'Scale into an ecosystem — shared catalog + partner distribution creates compounding reach.',
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, slides.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }
    if (touchStart - touchEnd < -75) {
      handlePrevious();
    }
  };

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-dark">
              Turn Telegram traffic into paid users.
            </h2>
            <p className="text-sm text-neutral-500 mb-8">
              Higher conversion, partner-driven growth, and automated payouts — inside one Mini App.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                    <Check size={14} className="text-accent" strokeWidth={3} />
                  </div>
                  <span className="text-dark leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div
              className="relative bg-white rounded-2xl p-8 shadow-lg border border-dark/10"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative w-full max-w-[320px] mx-auto aspect-[9/19] bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl overflow-hidden">
                {!imageErrors[currentSlide] ? (
                  <img
                    src={slides[currentSlide]}
                    alt={`Screen ${currentSlide + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-300"
                    onError={() => handleImageError(currentSlide)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-dark/5 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <svg className="w-8 h-8 text-dark/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-semibold text-dark mb-1">Screen {currentSlide + 1}</p>
                      <p className="text-xs text-neutral-500">Placeholder</p>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={handlePrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center hover:bg-white transition-all duration-200"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-dark" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center hover:bg-white transition-all duration-200"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-dark" />
              </button>

              <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-dark w-6'
                        : 'bg-neutral-300 hover:bg-neutral-400 w-2'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16">
          <a
            href="#test"
            className="px-8 py-4 bg-dark text-white rounded-full font-semibold hover:bg-dark/90 transition-all duration-200"
          >
            Try Test
          </a>
          <a
            href="#decks"
            className="px-8 py-4 bg-transparent text-dark rounded-full font-semibold border-2 border-dark/20 hover:bg-neutral-50 transition-all duration-200"
          >
            Open API Deck
          </a>
        </div>
      </div>
    </section>
  );
}
