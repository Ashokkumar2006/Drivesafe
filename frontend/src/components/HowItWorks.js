function HowItWorks() {

  const isMobile = window.innerWidth < 768;

  const steps = [

    {
      title: 'Data Collection',
      description:
        'Traffic feeds, weather conditions, driver behavior, and infrastructure intelligence collected continuously.'
    },

    {
      title: 'AI Risk Analysis',
      description:
        'Predictive models evaluate probability patterns and transportation risk conditions in real time.'
    },

    {
      title: 'Risk Report',
      description:
        'Generate enterprise-grade actionable insights for insurers, planners, and fleet operators.'
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
            marginBottom: '16px'
          }}
        >
          WORKFLOW
        </p>

        <h1
          style={{
            fontFamily: 'Playfair Display',
            fontSize: isMobile ? '2.8rem' : '4rem',
            color: '#1A0A00',
            marginBottom: '20px'
          }}
        >
          How DriveSafe Works
        </h1>

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

        {steps.map((step, index) => (

          <div
            key={index}
            className="glass card-hover"
            style={{
              borderRadius: '30px',
              padding: isMobile ? '28px' : '40px'
            }}
          >

            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '30px'
              }}
            >

              <h2
                style={{
                  color: '#7A2D00'
                }}
              >
                0{index + 1}
              </h2>

            </div>

            <h2
              style={{
                fontFamily: 'Playfair Display',
                color: '#1A0A00',
                marginBottom: '18px',
                fontSize: isMobile ? '1.7rem' : '2rem'
              }}
            >
              {step.title}
            </h2>

            <p
              style={{
                color: '#3D1C00',
                lineHeight: 1.8
              }}
            >
              {step.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default HowItWorks;