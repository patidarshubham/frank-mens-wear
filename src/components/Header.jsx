export default function Header() {
  return (
    <header
      style={{
        background: 'linear-gradient(90deg, #4e342e 0%, #d2b48c 100%)',
        padding: '1.5rem 1rem 1rem 1rem',
        color: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span
            style={{
              fontFamily: '"Pacifico", cursive',
              fontSize: '3rem',
              color: 'var(--primary-color)',
              textShadow: '2px 2px 8px #ff9800, 0 0 2px #fff',
              fontWeight: 700,
              letterSpacing: '1px',
            }}
          >
            Frank
          </span>
          <span
            style={{
              fontFamily: '"Pacifico", cursive',
              fontSize: '2rem',
              color: 'var(--primary-color)',
              textShadow: '2px 2px 8px #ff9800, 0 0 2px #fff',
              fontWeight: 900,
              letterSpacing: '2px',
            }}
          >
            Men&apos;s Wear
          </span>
        </div>
        <span
          style={{
            fontFamily: 'Arial Black, Arial, sans-serif',
            fontSize: '1.2rem',
            color: 'var(--primary-color)',
            textShadow: ' #ff9800, 0 0 1px #fff',
            fontWeight: 700,
            marginTop: '0.2rem',
            letterSpacing: '1px',
            // textShadow: '1px 1px 4px #4e342e',
          }}
        >
          THE DESIGNER STUDIO
        </span>
      </div>
      <nav style={{ marginTop: '1rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
        <a
          href='#collections'
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.2s',
            textShadow: '1px 1px 4px #4e342e',
          }}
        >
          Collections
        </a>
        <a
          href='#about'
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.2s',
            textShadow: '1px 1px 4px #4e342e',
          }}
        >
          About Us
        </a>
        <a
          href='#contact'
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.2s',
            textShadow: '1px 1px 4px #4e342e',
          }}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
