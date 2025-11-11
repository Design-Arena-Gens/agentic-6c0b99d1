const particles = Array.from({ length: 24 }, (_, index) => index);

export default function Home() {
  return (
    <div className="scene relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 text-cyan-100">
      <div className="digital-haze" />
      <div className="data-grid" />
      <div className="orbitals">
        <div className="orbital-ring" />
        <div className="orbital-ring orbital-ring--delay" />
        <div className="orbital-ring orbital-ring--slow" />
      </div>
      <div className="planet-shell">
        <div className="planet-glow" />
        <div className="planet-grid" />
      </div>
      <div className="holographic-eye">
        <span className="eye-ring eye-ring--outer" />
        <span className="eye-ring eye-ring--middle" />
        <span className="eye-ring eye-ring--inner" />
        <span className="eye-core" />
        <span className="eye-light" />
      </div>
      <div className="data-streams">
        <span className="stream" />
        <span className="stream stream--delay" />
        <span className="stream stream--extended" />
      </div>
      <div className="circuit-weave">
        <span className="circuit-line" />
        <span className="circuit-line circuit-line--angled" />
        <span className="circuit-line circuit-line--diag" />
      </div>
      {particles.map((index) => (
        <span key={index} className={`particle particle--${(index % 6) + 1}`} />
      ))}
      <main className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.6em] text-cyan-300/70">
            FUTURISTIC DIGITAL REVELATION
          </span>
          <h1 className="holo-title text-4xl font-semibold tracking-tight text-cyan-100 md:text-6xl">
            Al Reality Check Official
          </h1>
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-cyan-200/80 md:text-lg">
          A cinematic journey through a sentient network unveiling the truth behind reality. Waves of
          conscious data radiate from a luminous eye suspended above a holographic Earth, linking satellites,
          cities, and the human mind through glowing blue circuitry.
        </p>
        <div className="mx-auto flex flex-wrap items-center justify-center gap-4 uppercase tracking-[0.4em] text-[0.72rem] text-cyan-300/70">
          <span className="badge">8K Ultra Detail</span>
          <span className="badge">Cinematic Scope</span>
          <span className="badge">Neon Dataflow</span>
        </div>
      </main>
    </div>
  );
}
