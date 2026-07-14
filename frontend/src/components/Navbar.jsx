import { useState } from 'react';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = window.innerWidth < 900;

  return (

    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'rgba(255,180,60,0.25)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(122,45,0,0.2)'
      }}
    >

      <div
        style={{
          maxWidth: '1300px',
          margin: 'auto',
          padding: isMobile ? '18px 24px' : '20px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >

        {/* LOGO */}

        <h2
          style={{
            fontFamily: 'Playfair Display',
            color: '#1A0A00',
            fontSize: isMobile ? '1.7rem' : '2rem'
          }}
        >
          DriveSafe
        </h2>

        {/* DESKTOP MENU */}

        {!isMobile && (

          <div
            style={{
              display: 'flex',
              gap: '40px',
              color: '#3D1C00',
              fontWeight: 500
            }}
          >

            <span>Platform</span>
            <span>Analytics</span>
            <span>Solutions</span>
            <span>Documentation</span>

          </div>

        )}

        {/* RIGHT SECTION */}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}
        >

          {/* DESKTOP BUTTON */}

          {!isMobile && (

            <button
              style={{
                background: '#7A2D00',
                color: '#FFF5E6',
                border: 'none',
                padding: '14px 26px',
                borderRadius: '14px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Get Started
            </button>

          )}

          {/* MOBILE MENU ICON */}

          {isMobile && (

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '2rem',
                color: '#1A0A00'
              }}
            >
              ☰
            </button>

          )}

        </div>

      </div>

      {/* MOBILE DROPDOWN */}

      {menuOpen && isMobile && (

        <div
          style={{
            padding: '20px 24px 30px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            color: '#3D1C00',
            fontWeight: 500
          }}
        >

          <span>Platform</span>
          <span>Analytics</span>
          <span>Solutions</span>
          <span>Documentation</span>

          <button
            style={{
              background: '#7A2D00',
              color: '#FFF5E6',
              border: 'none',
              padding: '14px 22px',
              borderRadius: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Get Started
          </button>

        </div>

      )}

    </nav>
  );
}

export default Navbar;