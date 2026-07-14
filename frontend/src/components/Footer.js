function Footer() {

  const isMobile = window.innerWidth < 768;

  return (

    <footer
      style={{
        maxWidth: '1300px',
        margin: '120px auto 40px auto',
        padding: isMobile ? '0 24px' : '0 40px'
      }}
    >

      <div
        className="glass"
        style={{
          borderRadius: '36px',
          padding: isMobile ? '35px 24px' : '60px 50px'
        }}
      >

        {/* TOP */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              isMobile
                ? '1fr'
                : 'repeat(auto-fit,minmax(240px,1fr))',
            gap: '50px',
            marginBottom: '50px'
          }}
        >

          {/* BRAND */}

          <div>

            <h1
              style={{
                fontFamily: 'Playfair Display',
                color: '#1A0A00',
                marginBottom: '20px',
                fontSize: isMobile ? '2rem' : '2.5rem'
              }}
            >
              DriveSafe
            </h1>

            <p
              style={{
                color: '#3D1C00',
                lineHeight: 1.8,
                fontSize: isMobile ? '0.95rem' : '1rem'
              }}
            >
              Enterprise-grade predictive road safety intelligence
              platform for transportation analytics, insurers,
              and fleet operations.
            </p>

          </div>

          {/* PLATFORM */}

          <div>

            <h3
              style={{
                color: '#7A2D00',
                marginBottom: '20px'
              }}
            >
              Platform
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                color: '#3D1C00'
              }}
            >

              <span>Risk Analytics</span>
              <span>Route Monitoring</span>
              <span>AI Predictions</span>
              <span>Safety Reports</span>

            </div>

          </div>

          {/* COMPANY */}

          <div>

            <h3
              style={{
                color: '#7A2D00',
                marginBottom: '20px'
              }}
            >
              Company
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                color: '#3D1C00'
              }}
            >

              <span>About</span>
              <span>Solutions</span>
              <span>Careers</span>
              <span>Contact</span>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3
              style={{
                color: '#7A2D00',
                marginBottom: '20px'
              }}
            >
              Contact
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                color: '#3D1C00'
              }}
            >

              <span>support@drivesafe.ai</span>
              <span>+91 98765 43210</span>
              <span>Hyderabad, India</span>

            </div>

          </div>

        </div>

        {/* DIVIDER */}

        <div
          style={{
            height: '1px',
            background: 'rgba(122,45,0,0.2)',
            marginBottom: '30px'
          }}
        ></div>

        {/* BOTTOM */}

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: '20px'
          }}
        >

          <p
            style={{
              color: '#6B3A1F',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}
          >
            © 2026 DriveSafe Technologies. All rights reserved.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              color: '#6B3A1F',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}
          >

            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Security</span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;