from pydantic import BaseModel
from datetime import datetime, timezone
import re
from database import get_database


class ExerciseDatum(BaseModel):
    name: str
    maxes: list[float]


class InputDataWithDate(BaseModel):
    user_id: str
    exercise_data: list[ExerciseDatum]
    created_at: datetime

class HistEntryData(BaseModel):
    user_id: str
    exercise_name: str


def get_exercises_collection():
    db = get_database()
    return db["exercises"]


def create_or_update(input_data):
    user_id = input_data.user_id
    exercises_data = []

    for exercise in input_data.exercise_data:
        exercise_dict = {"name": exercise.name, "maxes": exercise.maxes}
        exercises_data.append(exercise_dict)

    data = {
        "user_id": user_id,
        "exercise_data": exercises_data,
        "created_at": input_data.created_at,
    }
    exercises_collection = get_exercises_collection()
    exercises_collection.insert_one(data)


def read_exercise_data(user_id):
    exercises_collection = get_exercises_collection()
    result_data = exercises_collection.find({"user_id": user_id}).sort("created_at", -1).limit(1)
    count = exercises_collection.count_documents({"user_id": user_id})
    if count > 0:
        latest_entry = next(result_data, None)  # Get the first document from the cursor
        if latest_entry:
            print("final return", latest_entry['exercise_data'])
            return latest_entry['exercise_data']
        else:
            return None
    else:
        return None
    
import re

# ...

import re

# ...

def find_historical_entries(user_id, exercise_name):
    exercises_collection = get_exercises_collection()

    # Create a regular expression pattern with case-insensitive and whitespace-insensitive matching
    pattern = f'^{re.escape(exercise_name)}$'

    # Find all entries for the specified user_id and exercise_name
    cursor = exercises_collection.find({
        "user_id": user_id
    })

    # Initialize a list to store the historical entries
    historical_entries = []

    for doc in cursor:
        for entry in doc['exercise_data']:
            if re.match(pattern, entry['name'].strip(), flags=re.IGNORECASE):
                historical_entry = {
                    'name': entry['name'],
                    'maxes': entry['maxes'],
                    'created_at': doc['created_at']
                }
                historical_entries.append(historical_entry)

    return historical_entries




