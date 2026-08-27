const links = [
  {
    eyebrow: 'New release',
    title: 'Watch our 2026 showreel',
    accent: true,
    href: 'https://example.com/showreel',
  },
  {
    eyebrow: 'Journal',
    title: 'Stories from the summit',
    accent: false,
    href: 'https://example.com/journal',
  },
  {
    eyebrow: 'Studio',
    title: 'Start a project with us',
    accent: false,
    href: 'https://example.com/contact',
  },
  {
    eyebrow: 'Dispatches',
    title: 'Join our monthly field notes',
    accent: false,
    href: 'https://example.com/newsletter',
  },
];

const socials = ['Instagram', 'Vimeo', 'YouTube'];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <section className="profile-card" aria-labelledby="profile-title">
        <header className="topbar">
          <span className="mini-brand">MM</span>
          <a className="share-button" href="mailto:?subject=Mount%20Media" aria-label="Share Mount Media">
            <span>Share</span>
            <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="identity">
          <div className="brand-mark" aria-label="Mount Media logo">
            <div className="sun" aria-hidden="true" />
            <div className="mountains" aria-hidden="true">
              <span className="mountain mountain-left" />
              <span className="mountain mountain-right" />
            </div>
            <span className="brand-mark-text">MOUNT<br />MEDIA</span>
          </div>

          <p className="location"><span aria-hidden="true">●</span> Kuala Lumpur · Everywhere</p>
          <h1 id="profile-title">Stories worth<br />climbing for.</h1>
          <p className="intro">
            An independent creative studio making films, campaigns, and culture move.
          </p>
        </div>

        <nav className="link-stack" aria-label="Mount Media links">
          {links.map((link, index) => (
            <a
              className={`link-card${link.accent ? ' link-card-featured' : ''}`}
              href={link.href}
              key={link.title}
              target="_blank"
              rel="noreferrer"
              style={{ '--delay': `${index * 80}ms` } as React.CSSProperties}
            >
              <span className="link-copy">
                <span className="link-eyebrow">{link.eyebrow}</span>
                <span className="link-title">{link.title}</span>
              </span>
              <span className="link-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>

        <footer>
          <div className="socials" aria-label="Social links">
            {socials.map((social) => (
              <a href={`https://example.com/${social.toLowerCase()}`} target="_blank" rel="noreferrer" key={social}>
                {social}
              </a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} Mount Media</p>
        </footer>
      </section>
    </main>
  );
}
