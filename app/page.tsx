const links = [
  ['Instagram', '#'], ['TikTok', '#'], ['YouTube', '#'], ['X', '#']
];
export default function Home() {
  return <main>
    <nav><span className="brand">KINGSLEY NJ</span><span>SEINT MUSIC</span></nav>
    <section className="hero">
      <p className="eyebrow">ARTIST • SONGWRITER • CREATIVE</p>
      <h1>KINGSLEY<br/><em>NJ</em></h1>
      <p className="intro">Music, stories and experiences. Welcome to the official home of Kingsley NJ.</p>
      <a className="cta" href="#music">EXPLORE THE MUSIC</a>
    </section>
    <section id="music" className="section">
      <p className="eyebrow">THE CATALOGUE</p><h2>Music</h2>
      <p>New releases and projects will appear here. Each release can link directly to Spotify, Apple Music, YouTube Music and other streaming platforms.</p>
      <div className="placeholder">YOUR NEXT RELEASE STARTS HERE</div>
    </section>
    <section className="section label"><p className="eyebrow">INDEPENDENT SPIRIT</p><h2>SEINT MUSIC</h2><p>A home for the sound, vision and creative direction of Kingsley NJ.</p></section>
    <section className="section"><p className="eyebrow">CONNECT</p><h2>Stay connected.</h2><div className="social">{links.map(([name,url])=><a key={name} href={url}>{name}</a>)}</div><p className="note">Social profile links are placeholders until configured in the admin dashboard.</p></section>
    <footer>© {new Date().getFullYear()} KINGSLEY NJ · SEINT MUSIC</footer>
  </main>;
}