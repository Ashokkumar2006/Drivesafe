import React, { useState } from 'react';

const glassCard = {
  background: 'rgba(255,255,255,0.15)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.3)',
  borderRadius: '24px',
  padding: '32px',
  boxShadow: '0 8px 32px rgba(122,45,0,0.15)'
};

const inputStyle = {
  width: '100%',
  padding: '14px',
  borderRadius: '12px',
  border: '1px solid rgba(122,45,0,0.3)',
  background: 'rgba(255,255,255,0.2)',
  color: '#1A0A00',
  fontSize: '15px',
  outline: 'none'
};

const labelStyle = {
  color: '#3D1C00',
  marginBottom: '8px',
  display: 'block',
  fontWeight: '600'
};

function PredictionForm() {

  const [formData, setFormData] = useState({

    time: '',
    weather: '',
    roadType: '',
    roadCondition: '',
    lighting: '',
    trafficControl: '',
    speed: '',
    vehicles: '',
    driverAge: '',
    alcohol: ''

  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        'http://localhost:5000/predict',
        {

          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify(formData)

        }
      );

      const data = await response.json();

      setResult(data.prediction);

    }
    catch (error) {

      console.log(error);

    }

  };

  return (

    <section
      style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >

      <div style={glassCard}>

        <h2
          style={{
            fontSize: '40px',
            color: '#1A0A00',
            marginBottom: '12px',
            fontFamily: 'Playfair Display'
          }}
        >
          AI Risk Prediction
        </h2>

        <p
          style={{
            color: '#6B3A1F',
            marginBottom: '40px'
          }}
        >
          Analyze accident risk using real-world traffic
          and environmental conditions.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(240px,1fr))',
            gap: '20px'
          }}
        >

          <div>
            <label style={labelStyle}>
              Time of Day
            </label>

            <select
              name="time"
              onChange={handleChange}
              style={inputStyle}
            >
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
              <option>Night</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>
              Weather
            </label>

            <select
              name="weather"
              onChange={handleChange}
              style={inputStyle}
            >
              <option>Clear</option>
              <option>Rain</option>
              <option>Fog</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>
              Road Type
            </label>

            <select
              name="roadType"
              onChange={handleChange}
              style={inputStyle}
            >
              <option>Highway</option>
              <option>Urban</option>
              <option>Rural</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>
              Road Condition
            </label>

            <select
              name="roadCondition"
              onChange={handleChange}
              style={inputStyle}
            >
              <option>Dry</option>
              <option>Wet</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>
              Lighting
            </label>

            <select
              name="lighting"
              onChange={handleChange}
              style={inputStyle}
            >
              <option>Daylight</option>
              <option>Darkness</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>
              Traffic Control
            </label>

            <select
              name="trafficControl"
              onChange={handleChange}
              style={inputStyle}
            >
              <option>Present</option>
              <option>Absent</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>
              Speed Limit
            </label>

            <input
              type="number"
              name="speed"
              onChange={handleChange}
              style={inputStyle}
              placeholder="80"
            />
          </div>

          <div>
            <label style={labelStyle}>
              Vehicles Involved
            </label>

            <input
              type="number"
              name="vehicles"
              onChange={handleChange}
              style={inputStyle}
              placeholder="2"
            />
          </div>

          <div>
            <label style={labelStyle}>
              Driver Age
            </label>

            <input
              type="number"
              name="driverAge"
              onChange={handleChange}
              style={inputStyle}
              placeholder="30"
            />
          </div>

          <div>
            <label style={labelStyle}>
              Alcohol Involvement
            </label>

            <select
              name="alcohol"
              onChange={handleChange}
              style={inputStyle}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          <button
            type="submit"
            style={{
              background: '#7A2D00',
              color: '#FFF5E6',
              border: 'none',
              borderRadius: '14px',
              padding: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Predict Risk
          </button>

        </form>

        {result && (

          <div
            style={{
              marginTop: '40px',
              padding: '24px',
              borderRadius: '20px',
              background:
                'rgba(255,255,255,0.18)',
              border:
                '1px solid rgba(255,255,255,0.3)'
            }}
          >

            <h3
              style={{
                color: '#1A0A00',
                marginBottom: '10px'
              }}
            >
              Prediction Result
            </h3>

            <p
              style={{
                color: '#3D1C00',
                fontSize: '18px'
              }}
            >
              Risk Level:
              <strong>
                {' '}
                {result.risk}
              </strong>
            </p>

            <p
              style={{
                color: '#3D1C00',
                fontSize: '18px'
              }}
            >
              Risk Score:
              <strong>
                {' '}
                {result.score}/100
              </strong>
            </p>

          </div>

        )}

      </div>

    </section>

  );

}

export default PredictionForm;