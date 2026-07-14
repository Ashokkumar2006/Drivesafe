from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

# LOAD MODEL

model = joblib.load('model.pkl')

# LOAD ENCODERS

time_encoder = joblib.load(
    'Time of Day_encoder.pkl'
)

weather_encoder = joblib.load(
    'Weather Conditions_encoder.pkl'
)

road_encoder = joblib.load(
    'Road Type_encoder.pkl'
)

road_condition_encoder = joblib.load(
    'Road Condition_encoder.pkl'
)

lighting_encoder = joblib.load(
    'Lighting Conditions_encoder.pkl'
)

traffic_encoder = joblib.load(
    'Traffic Control Presence_encoder.pkl'
)

alcohol_encoder = joblib.load(
    'Alcohol Involvement_encoder.pkl'
)

severity_encoder = joblib.load(
    'Accident Severity_encoder.pkl'
)

@app.route('/predict', methods=['POST'])
def predict():

    try:

        data = request.json

        input_data = pd.DataFrame([{

            'Time of Day':
            time_encoder.transform(
                [data['time']]
            )[0],

            'Weather Conditions':
            weather_encoder.transform(
                [data['weather']]
            )[0],

            'Road Type':
            road_encoder.transform(
                [data['roadType']]
            )[0],

            'Road Condition':
            road_condition_encoder.transform(
                [data['roadCondition']]
            )[0],

            'Lighting Conditions':
            lighting_encoder.transform(
                [data['lighting']]
            )[0],

            'Traffic Control Presence':
            traffic_encoder.transform(
                [data['trafficControl']]
            )[0],

            'Speed Limit (km/h)':
            int(data['speed']),

            'Number of Vehicles Involved':
            int(data['vehicles']),

            'Driver Age':
            int(data['driverAge']),

            'Alcohol Involvement':
            alcohol_encoder.transform(
                [data['alcohol']]
            )[0]

        }])

        prediction = model.predict(input_data)

        risk = severity_encoder.inverse_transform(
            prediction
        )[0]

        score_map = {

            'Low': 28,
            'Medium': 61,
            'High': 89

        }

        return jsonify({

            'risk': risk,
            'score': score_map.get(risk, 50)

        })

    except Exception as e:

        return jsonify({

            'error': str(e)

        })

if __name__ == '__main__':

    app.run(
        debug=True,
        port=5001
    )