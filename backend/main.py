from fastapi import FastAPI, Request, Query
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pymongo import MongoClient
from exercises import read_exercise_data, create_or_update, find_historical_entries
from users import auth_user, login_uuid
from datetime import datetime

import users

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with your frontend domain
    allow_methods=["GET", "POST", "OPTIONS"],  # Add other allowed methods if needed
    allow_headers=["Content-Type"],  # Add other allowed headers if needed
    allow_credentials=True,
    expose_headers=["Content-Disposition"],
)


class ExerciseDatum(BaseModel):
    name: str
    maxes: list[float]


class InputData(BaseModel):
    user_id: str
    exercise_data: ExerciseDatum


class InputDataWithDate(BaseModel):
    user_id: str
    exercise_data: ExerciseDatum
    created_at: datetime


class CreateUserData(BaseModel):
    username: str
    password: str
    email: str


class HistEntryData(BaseModel):
    user_id: str
    exercise_name: str


database = "rpe-calc"

uri = "mongodb://matt:password@0.0.0.0:27017/rpe-calc"

client = MongoClient(uri)


db = client[database]

user_collection = db["users"]
exercise_collection = db["exercises"]


@app.post("/exercises/{user_id}")
async def process_data(input_data: InputDataWithDate):
    exercise_dict = dict(input_data.exercise_data)  # Convert to a dictionary
    input_data.exercise_data = exercise_dict  # Update the exercise_data attribute
    create_or_update(input_data)


@app.options("/rpe-calc")
async def options(request: Request):
    headers = {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }
    return JSONResponse(content={}, headers=headers)


@app.post("/create-account")
def create_user_endpoint(data: CreateUserData):
    uuid = users.create_user(data.username, data.password, data.email)
    return {"UUID": uuid}


@app.get("/exercises/{user_id}")
def read_exercises(user_id: str):
    return read_exercise_data(user_id)


@app.get("/rpe-historical/{user_id}")
def hist_exercises(user_id: str, exercise_name: str = Query(..., alias="exerciseName")):
    return find_historical_entries(user_id, exercise_name)


@app.post("/login")
async def login_user(request: Request):
    data = await request.json()
    username = data.get("username")
    password = data.get("password")
    if auth_user(username, password):
        return login_uuid(username=username)
    else:
        return {"login failed"}
