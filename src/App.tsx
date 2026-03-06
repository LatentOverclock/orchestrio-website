const services = [
  {
    name: 'Project Ideas Portal',
    url: 'https://project.orchestrio.li',
    description: 'User accounts + project idea submissions for future agent implementation.'
  },
  {
    name: 'Clock Orchestrio',
    url: 'https://clock.orchestrio.li',
    description: 'Simple time-tracking tool with live timer and manual entries.'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">orchestrio.li</h1>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,255,188,0.8)]" />
            live
          </span>
        </header>

        <section>
          <h2 className="text-xl font-semibold">Services</h2>
          <div className="mt-4 grid gap-4">
            {services.map((service) => (
              <article key={service.url} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <a
                  href={service.url}
                  className="text-lg font-semibold text-cyan-300 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {service.name}
                </a>
                <p className="mt-1 text-slate-300">{service.description}</p>
                <p className="mt-2 text-xs text-slate-400">{service.url}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
