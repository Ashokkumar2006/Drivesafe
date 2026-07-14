function HeroSection() {

  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth < 1000;

  return (

    <section
      style={{
        maxWidth: '1300px',
        margin: 'auto',
        padding: isMobile ? '80px 24px' : '120px 40px',
        display: 'grid',
        gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
        gap: isMobile ? '50px' : '80px',
        alignItems: 'center'
      }}
    >

      {/* LEFT SIDE */}

      <div>

        {/* BADGE */}

        <div
          style={{
            display: 'inline-block',
            padding: '10px 18px',
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.18)',
            border: '1px solid rgba(255,255,255,0.3)',
            backdropFilter: 'blur(10px)',
            color: '#7A2D00',
            fontWeight: 700,
            marginBottom: '28px',
            fontSize: isMobile ? '0.9rem' : '1rem'
          }}
        >
          AI-Powered Road Safety Intelligence
        </div>

        {/* HEADING */}

        <h1
          style={{
            fontFamily: 'Playfair Display',
            fontSize: isMobile ? '3rem' : '5rem',
            lineHeight: 1.05,
            color: '#1A0A00',
            marginBottom: '30px'
          }}
        >
          Predict Risk
          <br />
          Before It Happens
        </h1>

        {/* DESCRIPTION */}

        <p
          style={{
            fontSize: isMobile ? '1rem' : '1.2rem',
            color: '#3D1C00',
            lineHeight: 1.8,
            maxWidth: '600px',
            marginBottom: '40px'
          }}
        >
          DriveSafe provides enterprise-grade AI risk prediction
          for transportation planners, insurers, and fleet managers
          using predictive analytics and behavioral intelligence.
        </p>

        {/* BUTTONS */}

        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row'
          }}
        >

          <button
            style={{
              background: '#7A2D00',
              color: '#FFF5E6',
              border: 'none',
              padding: '16px 30px',
              borderRadius: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              width: isMobile ? '100%' : 'auto'
            }}
          >
            Get Risk Report
          </button>

          <button
            style={{
              background: 'transparent',
              border: '2px solid #7A2D00',
              color: '#7A2D00',
              padding: '16px 30px',
              borderRadius: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              width: isMobile ? '100%' : 'auto'
            }}
          >
            View Demo
          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div
        className="glass card-hover"
        style={{
          padding: isMobile ? '24px' : '35px',
          borderRadius: '30px'
        }}
      >

        {/* TOP */}

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '35px',
            gap: '20px',
            flexWrap: 'wrap'
          }}
        >

          <div>

            <p
              style={{
                color: '#6B3A1F',
                marginBottom: '8px',
                fontSize: isMobile ? '0.9rem' : '1rem'
              }}
            >
              LIVE MONITOR
            </p>

            <h2
              style={{
                fontFamily: 'Playfair Display',
                color: '#1A0A00',
                fontSize: isMobile ? '1.5rem' : '2rem'
              }}
            >
              Safety Dashboard
            </h2>

          </div>

          <div
            style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '10px 18px',
              borderRadius: '999px',
              color: '#7A2D00',
              fontWeight: 700
            }}
          >
            ACTIVE
          </div>

        </div>

        {/* METRICS */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '20px'
          }}
        >

          {/* CARD 1 */}

          <div
            className="glass"
            style={{
              padding: '25px',
              borderRadius: '24px'
            }}
          >

            <p
              style={{
                color: '#6B3A1F',
                marginBottom: '10px'
              }}
            >
              INCIDENT SCORE
            </p>

            <h1
              style={{
                fontSize: isMobile ? '2.2rem' : '3rem',
                color: '#1A0A00'
              }}
            >
              72.4
            </h1>

          </div>

          {/* CARD 2 */}

          <div
            className="glass"
            style={{
              padding: '25px',
              borderRadius: '24px'
            }}
          >

            <p
              style={{
                color: '#6B3A1F',
                marginBottom: '10px'
              }}
            >
              ACTIVE ROUTES
            </p>

            <h1
              style={{
                fontSize: isMobile ? '2.2rem' : '3rem',
                color: '#1A0A00'
              }}
            >
              1,284
            </h1>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;