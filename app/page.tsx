import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative font-[family-name:var(--font-geist-sans)] selection:bg-indigo-500/30">
      {/* Background ambient gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] -left-64 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-50 w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">InvoicePro</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-400">
          <Link href="#features" className="hover:text-white transition-colors duration-200">Features</Link>
          <Link href="#pricing" className="hover:text-white transition-colors duration-200">Pricing</Link>
          <Link href="#testimonials" className="hover:text-white transition-colors duration-200">Testimonials</Link>
        </div>
        <Link
          href="/invoice"
          className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/5 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Open App
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 mb-8 backdrop-blur-xl shadow-xl">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
          InvoicePro v2.0 is now live
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 max-w-5xl mx-auto leading-[1.1]">
          Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Stunning Invoices</span> in Seconds.
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          The most seamless and elegant way to manage billing, get paid faster, and present a world-class professional image to your clients.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/invoice"
            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(99,102,241,0.3)]"
          >
            Start For Free
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1.5 transition-transform"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </Link>
          <a
            href="#demo"
            className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-lg font-semibold backdrop-blur-md transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Watch Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to bill like a pro</h2>
          <p className="text-gray-400 font-medium">Power-packed features in an incredibly intuitive interface.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Card 1 */}
          <div className="group p-8 rounded-[2rem] bg-neutral-900 border border-white/5 hover:border-indigo-500/50 transition-all duration-500 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 shadow-inner border border-indigo-500/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-indigo-400"><path d="M14 2H6a2 2 0 0 0-2 2v16h16v-12z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Smart Templates</h3>
            <p className="text-gray-400 font-medium leading-relaxed">Choose from dozens of beautifully crafted templates that adapt flawlessly to your brand identity.</p>
          </div>

          {/* Feature Card 2 */}
          <div className="group p-8 rounded-[2rem] bg-neutral-900 border border-white/5 hover:border-purple-500/50 transition-all duration-500 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 border border-purple-500/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-purple-400"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Automated Tracking</h3>
            <p className="text-gray-400 font-medium leading-relaxed">Know exactly when your clients open, view, and process your invoices. No more guessing.</p>
          </div>

          {/* Feature Card 3 */}
          <div className="group p-8 rounded-[2rem] bg-neutral-900 border border-white/5 hover:border-pink-500/50 transition-all duration-500 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center mb-6 border border-pink-500/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-pink-400"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Lightning Fast</h3>
            <p className="text-gray-400 font-medium leading-relaxed">Built on a highly optimized native engine. Generate and export polished PDFs in milliseconds.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-xl py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 font-medium">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 text-white"><path d="M12 2L2 7l10 5 10-5-10-5z" /></svg>
            </div>
            <span className="font-bold text-white">InvoicePro</span>
          </div>
          <p>© {new Date().getFullYear()} InvoicePro. Built for modern businesses.</p>
        </div>
      </footer>
    </main>
  );
}
