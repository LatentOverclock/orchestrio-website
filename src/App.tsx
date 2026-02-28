const featureCards = [
  {
    title: 'Elegant control plane',
    text: 'A polished landing surface for your services, experiments, and product entries.'
  },
  {
    title: 'Label-driven routing',
    text: 'Ship independent apps and expose them cleanly through Traefik host rules.'
  },
  {
    title: 'Fast by design',
    text: 'Static frontend, optimized build output, lightweight runtime.'
  }
];

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-violet-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-6">
        <header className="flex items-center justify-between">
          <p className="text-sm font-semibold tracking-[0.28em] text-cyan-300">ORCHESTRIO</p>
          <a href="#features" className="rounded-xl border border-white/25 px-4 py-2 text-sm hover:border-cyan-300">
            Explore
          </a>
        </header>

        <main className="pt-20 md:pt-28">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Modern app gateway</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            One domain.
            <br />
            Infinite launches.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300 md:text-xl">
            orchestrio.li is your premium entry point for tools and applications.
            Built for clarity, speed, and composable growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#features"
              className="rounded-xl bg-gradient-to-r from-cyan-300 to-indigo-400 px-5 py-3 font-semibold text-slate-900"
            >
              View features
            </a>
            <a href="#status" className="rounded-xl border border-white/25 px-5 py-3 font-semibold">
              Status
            </a>
          </div>

          <section id="features" className="mt-14 grid gap-4 md:grid-cols-3">
            {featureCards.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-2 text-slate-300">{item.text}</p>
              </article>
            ))}
          </section>

          <section id="status" className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,255,188,0.8)]" />
            <span className="text-sm text-slate-200">Live at orchestrio.li</span>
          </section>
        </main>

        <footer className="mt-12 text-xs text-slate-400">© {new Date().getFullYear()} orchestrio</footer>
      </div>
    </div>
  );
}
