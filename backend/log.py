from pydantic import BaseModel
from datetime import date
from database import get_database


class TrainingDatum(BaseModel): 
    exercise: str
    weights: list[int]
    reps: list[int]
    effort: list[str]
    RPE: bool
    percent: bool
    english: bool
    notes: str

class TrainingData(BaseModel): 
    list[TrainingDatum]

class LogData(BaseModel):
    user_id: str 
    training_data: TrainingData
    created_at: date


def get_log_collection():
    db = get_database()
    return db["log"]

def get_exercise_collection():
    db = get_database()
    return db["exercises"]

def update_new_PR(input_data:LogData):
    training_data = input_data.training_data
    exercise_collection = get_exercise_collection()
    PR_data = exercise_collection.find({"user_id": input_data.user_id})

    for entry in training_data:
        exercise_name = entry['exercise']
        weights = entry['weights']
        reps = entry['reps']
        for data in PR_data:
            PR_entry = data['exercises']
            name = PR_entry["name"]
            maxes = PR_entry['maxes']
            if exercise_name == name:
                for i in range(len(reps)):
                    if weights[i] > maxes[reps[i]-1]:
                        maxes[reps[i]-1] = weights[i]
                        new_pr = {
                            name: exercise_name,
                            maxes: maxes
                        }
                        data = {
                            "user_id": input_data.user_id,
                            "exercise_data": new_pr,
                            "created_at": input_data.created_at,
                        }
                        exercise_collection.insert_one(data)

                        





def create_or_update_workout(input_data:LogData):
    user_id = input_data.user_id
    update_new_PR(input_data)
    data = {
        "user_id": user_id,
        "exercise_data": input_data.training_data,
        "created_at": input_data.created_at,
    }
    log_collection = get_log_collection()
    log_collection.insert_one(data)

def read_log_data(user_id):
    log_collection = get_log_collection()
    log_result_data = log_collection.find({"user_id": user_id}).sort("created_at", -1)
    log_count = log_collection.count_documents({"user_id": user_id})

    if log_count > 0:
        log_data = []
        for entry in log_result_data:
            log_entry = entry["training_data"]
            log_data.append(log_entry)
        return log_data
    else:
        return None
