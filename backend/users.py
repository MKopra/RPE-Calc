import hashlib

from database import get_database

database = get_database()
collection = database["users"]


def _hash_password(password: str):
    m = hashlib.sha256()
    m.update(password.encode("utf-8"))
    return m.hexdigest()


def create_user(username: str, password: str, email: str):
    # TODO: Verify username does NOT already exist!

    result = collection.insert_one(
        {
            "username": username,
            "hashed_password": _hash_password(password),
            "email": email,
        }
    )

    return str(result.inserted_id)


def auth_user(username: str, password: str):
    results = collection.find({"username": username}, {"hashed_password": 1})

    results = list(results)
    if len(results) > 1:
        raise Exception(f"More than one user with username: {username}!")

    return _hash_password(password) == results[0]["hashed_password"]

def login_uuid(username: str):
    query = {"username": username}
    results = collection.find(query)
    user = next(results, None)  # Get the first document from the cursor
    if user:
        return str(user["_id"])  # Access the _id field of the user document
    else:
        return None

            
        
