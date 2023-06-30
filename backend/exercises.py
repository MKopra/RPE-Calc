from pydantic import BaseModel

from database import get_database


class ExerciseDatum(BaseModel):
    name: str
    maxes: list[float]


class InputData(BaseModel):
    exercise_data: list[ExerciseDatum]


class OutputData(BaseModel):
    user_id: str
    exercise_data: list[ExerciseDatum]


def get_exercises_collection():
    db = get_database()
    return db["exercises"]


def create_or_update(user_id: str, input_data: InputData):
    exercises_collection = get_exercises_collection()
    exercises_collection.update_one({"user_id": user_id}, {"$set": input_data.dict()}, upsert=True)


def read_exercise_data(user_id: str):
    exercises_collection = get_exercises_collection()
    result_data = exercises_collection.find_one({"user_id": user_id})
    
    del result_data["_id"]
    del result_data["user_id"]
    # result = result_data["exercise_data"]
    # names = []
    # for i in range(len(result)):
    #     names.append(result[i]['name'])
    # return names

    return result_data
