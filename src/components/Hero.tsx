export default function Hero() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-white flex items-center" style={{ minHeight: '90vh' }}>
      <div className="max-w-container mx-auto w-full py-24 sm:py-32">
        <div className="flex flex-col items-center">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-dark">FABRICBOT ECOSYSTEM — commerce layer for </span>
              <span className="text-accent">Telegram</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl mb-12 mx-auto text-neutral-500 leading-relaxed max-w-3xl">
              FABRICBOT ECOSYSTEM is <span className="font-semibold text-dark">one Telegram Mini App</span> where instant shops, referrals, and automated payouts run as a single system — executed by TON smart contracts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://t.me/fabricbotbot"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-dark text-white rounded-full font-semibold hover:bg-dark/90 transition-all duration-200"
              >
                Open App
              </a>
              <a
                href="#decks"
                className="px-8 py-4 bg-transparent text-dark rounded-full font-semibold transition-all duration-200 border-2 border-dark hover:bg-dark hover:text-white"
              >
                View Decks
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
