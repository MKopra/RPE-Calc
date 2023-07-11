from pydantic import BaseModel
from datetime import datetime, timezone
import re
from database import get_database


class ExerciseDatum(BaseModel):
    name: str
    maxes: list[float]


class InputDataWithDate(BaseModel):
    user_id: str
    exercise_data: ExerciseDatum
    created_at: datetime


class HistEntryData(BaseModel):
    user_id: str
    exercise_name: str


def get_exercises_collection():
    db = get_database()
    return db["exercises"]


def create_or_update(input_data):
    user_id = input_data.user_id
    data = {
        "user_id": user_id,
        "exercise_data": input_data.exercise_data,
        "created_at": input_data.created_at,
    }
    exercises_collection = get_exercises_collection()
    exercises_collection.insert_one(data)


def read_exercise_data(user_id):
    exercises_collection = get_exercises_collection()
    result_data = exercises_collection.find({"user_id": user_id}).sort("created_at", -1)
    count = exercises_collection.count_documents({"user_id": user_id})

    if count > 0:
        exercise_data = []
        exercise_names = set()

        for entry in result_data:
            print("entry", entry)
            exercise_entry = entry["exercise_data"]
            print(f"exercise_entry: {exercise_entry}")
            print(f"type of exercise_entry: {type(exercise_entry)}")
            name = exercise_entry["name"]
            if name not in exercise_names:
                exercise_data.append(exercise_entry)
                exercise_names.add(name)
        print(exercise_data)
        return exercise_data
    else:
        return None

def estimate_one_rm(maxes: list):
    mult = [1.0, 0.94, 0.91, 0.883, 0.86, 0.833, 0.803, 0.777, 0.753, 0.733]
    for i in range(len(maxes)):
        if maxes[i] != 0:
            return maxes[i] / mult[i]

def summarize_library_data(user_id):
    exercises_collection = get_exercises_collection()
    cursor = exercises_collection.find({"user_id": user_id})
    summary_maxes = {}
    for doc in cursor:
        entry = doc["exercise_data"]
        exercise_name = entry['name']
        maxes = entry['maxes']
        estonerepmax = estimate_one_rm(maxes)
        summary_maxes[exercise_name] = estonerepmax


def find_dash_exercises(user_id): ### TODO:duplicate the most recent data on every unique exercise name with the current date
    exercises_collection = get_exercises_collection()
    cursor = exercises_collection.find({"user_id": user_id})
    dash_entries = []

    for doc in cursor:
        entry = doc["exercise_data"]
        exercise_name = entry['name']
        maxes = entry['maxes']
        estonerepmax = estimate_one_rm(maxes)
        created_at = doc["created_at"]
        created_at_formatted = created_at.strftime("%H:%M %Y-%m-%d")

        dash_entry = {
            "exercise": exercise_name,
            "estonerepmax": estonerepmax,
            "created_at": created_at_formatted
        }
        dash_entries.append(dash_entry)

    updated_entries = []

    unique_exercises = set(entry['exercise'] for entry in dash_entries)
    
    for exercise in unique_exercises:
        entries = [entry for entry in dash_entries if entry['exercise'] == exercise]
        latest_entry = entries[-1]
        if latest_entry['created_at'] != datetime.now().strftime("%Y-%m-%d"):
            updated_entry = {
                "exercise": latest_entry['exercise'],
                "estonerepmax": latest_entry['estonerepmax'],
                "created_at": datetime.now().strftime("%H:%M %Y-%m-%d")
            }
            updated_entries.append(updated_entry)
    
    dash_entries.extend(updated_entries)
    
    print(dash_entries)
    print("dash entry len", len(dash_entries))
    
    return dash_entries




def find_historical_entries(user_id, exercise_name):
    exercises_collection = get_exercises_collection()
    pattern = f"^{re.escape(exercise_name)}$"
    cursor = exercises_collection.find({"user_id": user_id})
    historical_entries = []

    for doc in cursor:
        print("doc", doc)
        entry = doc["exercise_data"]
        print("entry", entry)
        if re.match(pattern, entry['name'].strip(), flags=re.IGNORECASE):
            historical_entry = {
                "name": entry['name'],
                "maxes": entry['maxes'],
                "created_at": doc["created_at"],
            }
            historical_entries.append(historical_entry)

    return historical_entries
