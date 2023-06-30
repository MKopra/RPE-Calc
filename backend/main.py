from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pymongo import MongoClient
from exercises import read_exercise_data, create_or_update

import users

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
class ExerciseDatum(BaseModel):
    name: str
    maxes: list[float]

class InputData(BaseModel):
    user_id: str
    exercise_data: list[ExerciseDatum]


class CreateUserData(BaseModel):
    username: str
    password: str
    email: str

#class UserID(BaseModel):
 #   uuid: str

database = 'rpe-calc' 

uri = "mongodb://matt:password@0.0.0.0:27017/rpe-calc"

client = MongoClient(uri)
 

db = client[database]

user_collection = db['users']
exercise_collection = db['exercises']
 
@app.post("/exercises/{user_id}")
async def process_data(user_id: str, input_data: InputData): #user_data: CreateUserData):
    print("provided user_id",user_id)
    print("provided input_data", input_data)
    create_or_update(user_id, input_data) ###### next step lets try ipython


@app.options("/rpe-calc")
async def options(request: Request):
    # Handle OPTIONS method by returning a response with allowed methods
    headers = {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }
    return JSONResponse(content={}, headers=headers)


@app.post("/login") #### changed to /login
def create_user_endpoint(data: CreateUserData):
    uuid = users.create_user(data.username, data.password, data.email)
    return {"UUID": uuid}


@app.get("/exercises/{user_id}")
def read_exercises(user_id: str):
    return read_exercise_data(user_id)
