function Features() {

  const isMobile = window.innerWidth < 768;

  const features = [

    {
      title: 'Real-Time Risk Scoring',
      description:
        'Instantly evaluate transportation risk levels using live traffic, environmental, and behavioral intelligence.'
    },

    {
      title: 'Driver Behavior Analysis',
      description:
        'Identify unsafe driving patterns through predictive analytics and AI-powered monitoring systems.'
    },

    {
      title: 'Route Hazard Mapping',
      description:
        'Visualize accident-prone corridors and infrastructure weaknesses using geospatial intelligence.'
    },

    {
      title: 'Incident Prediction Engine',
      description:
        'Forecast transportation incidents before they occur using enterprise-scale machine learning models.'
    }

  ];

  return (

    <section
      style={{
        maxWidth: '1300px',
        margin: '120px auto',
        padding: isMobile ? '0 24px' : '0 40px'
      }}
    >

      {/* HEADER */}

      <div
        style={{
          textAlign: 'center',
          marginBottom: '70px'
        }}
      >

        <p
          style={{
            color: '#7A2D00',
            fontWeight: 700,
            letterSpacing: '1px',
            marginBottom: '18px'
          }}
        >
          PLATFORM FEATURES
        </p>

        <h1
          style={{
            fontFamily: 'Playfair Display',
            fontSize: isMobile ? '2.8rem' : '4rem',
            color: '#1A0A00',
            marginBottom: '22px'
          }}
        >
          Enterprise Safety Intelligence
        </h1>

        <p
          style={{
            maxWidth: '760px',
            margin: 'auto',
            color: '#3D1C00',
            lineHeight: 1.8,
            fontSize: isMobile ? '1rem' : '1.1rem'
          }}
        >
          DriveSafe combines predictive AI, route intelligence,
          and behavioral analytics to help organizations make
          safer transportation decisions at scale.
        </p>

      </div>

      {/* GRID */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            isMobile
              ? '1fr'
              : 'repeat(auto-fit,minmax(280px,1fr))',
          gap: '30px'
        }}
      >

        {features.map((feature, index) => (

          <div
            key={index}
            className="glass card-hover"
            style={{
              borderRadius: '30px',
              padding: isMobile ? '28px' : '40px',
              minHeight: isMobile ? 'auto' : '280px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >

            {/* ICON */}

            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '22px',
                background: 'rgba(255,255,255,0.18)',
                border: '1px solid rgba(255,255,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '32px'
              }}
            >

              <div
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: '#7A2D00'
                }}
              ></div>

            </div>

            {/* CONTENT */}

            <div>

              <h2
                style={{
                  fontFamily: 'Playfair Display',
                  color: '#1A0A00',
                  fontSize: isMobile ? '1.7rem' : '2rem',
                  marginBottom: '18px'
                }}
              >
                {feature.title}
              </h2>

              <p
                style={{
                  color: '#3D1C00',
                  lineHeight: 1.8,
                  fontSize: isMobile ? '0.95rem' : '1rem'
                }}
              >
                {feature.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;