export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-text">
          <h1>ERP Solution for Your Business</h1>
          <p>
            Kelola transaksi dan pergerakan barang dengan mudah dan efisien
            menggunakan sistem ERP kami
          </p>
        </div>
      </section>
      <section className="quote">
        <em>{'"Kelola bisnis tanpa repot, pantau semua dari satu tempat"'}</em>
      </section>
      <section className="feature-illustration">
        <div className="video-container">
          <video autoPlay muted loop playsInline>
            <source src="/videos/video-home.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </main>
  );
}
