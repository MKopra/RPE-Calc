from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pymongo import MongoClient

import users

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ExerciseData(BaseModel):
    exerciseNames: dict
    tabInputs: dict


class CreateUserData(BaseModel):
    username: str
    password: str
    email: str

database = 'rpe-calc' 

uri = "mongodb://matt:password@0.0.0.0:27017/rpe-calc"

client = MongoClient(uri)
 

db = client[database]

collection = db['users']
 
@app.post('/rpe-calc')
async def process_data(data: ExerciseData):
    exerciseNames = data.exerciseNames
    tabInputs = data.tabInputs
    print(exerciseNames)
    print(tabInputs)
    # Perform further processing with the received data
    # ...
    document = {
        "exerciseNames": exerciseNames,
        "tabInputs": tabInputs
    }
    result = collection.insert_one(document)
    print(f"Inserted document ID: {result.inserted_id}")
    #client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')

    return {'message': 'Data received successfully'}

@app.get('/rpe-calc')
async def get_data():
    print("YOLO")
    one = collection.find_one()
    return {"success": one["exerciseNames"]}

@app.options("/rpe-calc")
async def options(request: Request):
    # Handle OPTIONS method by returning a response with allowed methods
    headers = {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }
    return JSONResponse(content={}, headers=headers)


@app.post("/create-user")
def create_user_endpoint(data: CreateUserData):
    uuid = users.create_user(data.username, data.password, data.email)
    return {"UUID": uuid}
