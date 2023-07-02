from pydantic import BaseModel
from datetime import datetime, timezone

from database import get_database


class ExerciseDatum(BaseModel):
    name: str
    maxes: list[float]


class InputDataWithDate(BaseModel):
    user_id: str
    exercise_data: list[ExerciseDatum]
    created_at: datetime


class OutputData(BaseModel):
    user_id: str
    exercise_data: list[ExerciseDatum]


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
    result_data = exercises_collection.find({"user_id": user_id}).sort("timestamp", -1).limit(1)
    count = exercises_collection.count_documents({"user_id": user_id})
    if count > 0:
        return result_data[0]['exercise_data']
    else:
        return None
