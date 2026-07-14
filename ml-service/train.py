import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score
import joblib

# LOAD DATASET

data = pd.read_csv(
    'dataset/accidents.csv'
)

# SELECT BETTER FEATURES

data = data[[
    'Time of Day',
    'Weather Conditions',
    'Road Type',
    'Road Condition',
    'Lighting Conditions',
    'Traffic Control Presence',
    'Speed Limit (km/h)',
    'Number of Vehicles Involved',
    'Driver Age',
    'Alcohol Involvement',
    'Accident Severity'
]]

# REMOVE NULL VALUES

data = data.dropna()

# CATEGORICAL COLUMNS

categorical_columns = [

    'Time of Day',
    'Weather Conditions',
    'Road Type',
    'Road Condition',
    'Lighting Conditions',
    'Traffic Control Presence',
    'Alcohol Involvement',
    'Accident Severity'

]

# STORE ENCODERS

encoders = {}

# ENCODE ALL CATEGORICAL DATA

for column in categorical_columns:

    encoder = LabelEncoder()

    data[column] = encoder.fit_transform(
        data[column]
    )

    encoders[column] = encoder

# FEATURES

X = data[[
    'Time of Day',
    'Weather Conditions',
    'Road Type',
    'Road Condition',
    'Lighting Conditions',
    'Traffic Control Presence',
    'Speed Limit (km/h)',
    'Number of Vehicles Involved',
    'Driver Age',
    'Alcohol Involvement'
]]

# TARGET

y = data['Accident Severity']

# SPLIT DATA

X_train, X_test, y_train, y_test = \
train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# BETTER MODEL

model = RandomForestClassifier(

    n_estimators=300,
    max_depth=20,
    min_samples_split=5,
    random_state=42

)

# TRAIN

model.fit(X_train, y_train)

# TEST

predictions = model.predict(X_test)

# ACCURACY

accuracy = accuracy_score(
    y_test,
    predictions
)

print(
    f'Improved Accuracy: {accuracy * 100:.2f}%'
)

# SAVE MODEL

joblib.dump(model, 'model.pkl')

# SAVE ENCODERS

for name, encoder in encoders.items():

    joblib.dump(
        encoder,
        f'{name}_encoder.pkl'
    )

print(
    'Improved model trained successfully'
)