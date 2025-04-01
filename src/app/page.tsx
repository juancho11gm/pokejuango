export default function Home() {
  return (
    <main className="max-w-[1042px] mx-auto">
      <section>
      <div className="nes-container is-dark with-title">
        <p className="title">Juan González - @juancho11gm</p>
        <p>Web Engineer at Kinesso.</p>
        <p>JavaScript and AI enthusiast.</p>
        <p>Learning everyday about tech and personal growth.</p>
      </div>
    </section>
    <nav className="grid! grid-cols-2! gap-1! mt-2!">
      <a className="nes-btn">Blog</a>
      <a className="nes-btn">Projects</a>
      <a href="/about" className="nes-btn">About</a>
    </nav>
  </main>
  );
}
