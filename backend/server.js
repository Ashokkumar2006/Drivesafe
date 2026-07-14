const express = require('express');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

/* ROOT ROUTE */

app.get('/', (req, res) => {

  res.json({
    message: 'DriveSafe Backend Running'
  });

});

/* REAL ML PREDICTION ROUTE */

app.post('/predict', async (req, res) => {

  try {

    const {
      origin,
      destination,
      weather,
      time
    } = req.body;

    /* SEND DATA TO FLASK ML SERVICE */

    const mlResponse =
      await axios.post(

        'http://127.0.0.1:5001/predict',

        {
          weather,
          time
        }

      );

    /* RETURN RESPONSE */

    res.json({

      success: true,

      prediction: mlResponse.data,

      trip: {
        origin,
        destination
      }

    });

  }
  catch (error) {

    console.log(error.message);

    res.status(500).json({

      success: false,
      message:
        'ML Service Connection Failed'

    });

  }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});