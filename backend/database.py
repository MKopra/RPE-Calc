from pymongo import MongoClient

DATABASE = "rpe-calc"
URI = "mongodb://matt:password@0.0.0.0:27017/rpe-calc"


def get_database():
    client = MongoClient(URI)
    return client[DATABASE]
