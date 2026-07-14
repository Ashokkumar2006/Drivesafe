import { useEffect, useState } from 'react';

function StatsBar() {

  const isMobile = window.innerWidth < 768;

  const [accuracy, setAccuracy] = useState(0);
  const [trips, setTrips] = useState(0);
  const [cities, setCities] = useState(0);

  useEffect(() => {

    let a = 0;
    let t = 0;
    let c = 0;

    const interval = setInterval(() => {

      if (a < 98.4) {
        a += 1.2;
        setAccuracy(a.toFixed(1));
      }

      if (t < 12) {
        t += 1;
        setTrips(t);
      }

      if (c < 40) {
        c += 2;
        setCities(c);
      }

    }, 50);

    setTimeout(() => {
      clearInterval(interval);
    }, 2500);

    return () => clearInterval(interval);

  }, []);

  const stats = [

    {
      value: `${accuracy}%`,
      label: 'Prediction Accuracy'
    },

    {
      value: `${trips}M+`,
      label: 'Trips Analyzed'
    },

    {
      value: `${cities}+`,
      label: 'Cities Covered'
    },

    {
      value: '24/7',
      label: 'Risk Monitoring'
    }

  ];

  return (

    <section
      style={{
        maxWidth: '1300px',
        margin: isMobile ? '60px auto' : '80px auto',
        padding: isMobile ? '0 24px' : '0 40px'
      }}
    >

      <div
        className="glass"
        style={{
          borderRadius: '32px',
          padding: isMobile ? '35px 24px' : '50px',
          display: 'grid',
          gridTemplateColumns:
            isMobile
              ? '1fr'
              : 'repeat(auto-fit,minmax(220px,1fr))',
          gap: isMobile ? '35px' : '40px'
        }}
      >

        {stats.map((item, index) => (

          <div
            key={index}
            style={{
              textAlign: 'center'
            }}
          >

            <h1
              style={{
                fontSize: isMobile ? '2.3rem' : '3rem',
                color: '#1A0A00',
                marginBottom: '12px',
                fontWeight: 700,
                fontVariantNumeric: 'tabular-nums'
              }}
            >
              {item.value}
            </h1>

            <p
              style={{
                color: '#6B3A1F',
                fontSize: isMobile ? '0.95rem' : '1rem',
                fontWeight: 500
              }}
            >
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default StatsBar;