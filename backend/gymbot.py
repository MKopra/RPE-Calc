import os
import openai
import ast

openai.api_key = os.environ.get('OPENAI_API_KEY')
openai.api_key = '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'


# Rest of your code using the OpenAI API

# create a version with and without specific weights --> profile setups/settings 
# Do you want me to explicitly state weights or give you a percent/RPE/plain english description of difficulty
# this version does not explicitly fill out weights

# Define the function to generate a workout plan
def generate_workout(exercise_data, user_string):

    # Use OpenAI to generate a response in the voice of a robot
    prompt = f"write a trainee a detailed singular workout in the voice of a robot fitness trainer based on their fitness goals, their level of fitness that you assess from their one rep maxes, their most recent workout, seen here:{exercise_data} as well as the following personalized request: {user_string}. Make sure your workout is in line with their goals but DO NOT explicitly state you used this information. Please only return your prescribed workout in the same data model as the recent_workout in the prompt at the very end of the message inside of curly braces. LEAVE ALL WEIGHTS ARRAYS FULL OF 0'S so the user can fill it out themselves"
    response = openai.Completion.create(
        engine='text-davinci-003',
        prompt=prompt,
        temperature=0.8,
        max_tokens=1000,
        n=1,
        stop=None,
        frequency_penalty=0,
        presence_penalty=0.2
    )

    # Retrieve the generated response from OpenAI
    generated_text = response.choices[0].text.strip()

    return generated_text

# Example usage
user_string = 'write me a hard leg workout'
exercise_data = {
  "fitness_goals":["1. Bench 300lbs", "2. Lose 20lbs and get a 6 pack", "3. Get healthier overall"],
  "estimated one rep maxes":[{"Squat":300},{"Bench":200},{"Deadlift":400}],
  "recent_workout": [
    {
      "exercise": "Barbell Bench Press",
      "weights": [225, 225, 225, 225],
      "reps": [6, 6, 6, 6],
      "effort": ["easy", "med", "hard", "hard"],
      "RPE": False,
      "percent": False,
      "english": True,
      "notes": "Challenging weight"
    },
    {
      "exercise": "Incline Dumbbell Press",
      "weights": [60, 60, 60],
      "reps": [8, 8, 8],
      "effort": ["hard", "hard", "hard"],
      "RPE": False,
      "percent": False,
      "english": True,
      "notes": "Moderate weight"
    },
    {
      "exercise": "Push-ups",
      "weights": [0,0,0],
      "reps": ["Max", "Max", "Max"],
      "effort": ["hard", "hard", "hard"],
      "RPE": False,
      "percent": False,
      "english": True,
      "notes": ""
    }]}
user_response_string = 'workout went alright, on squats I did 225 all sets, on lunges I did 95 all sets, stiff legs and step ups were harder than they shouldve been'
presc_exercise_data = {
    "fitness_goals":["1. Bench 300lbs", "2. Lose 20lbs and get a 6 pack", "3. Get healthier overall"],
    "estimated one rep maxes":[{"Squat":300},{"Bench":200},{"Deadlift":400}],
    "recent_workout": 
    [{'exercise': 'Squats', 
     'weights': [0, 0, 0], 
     'reps': [8, 8, 8], 
     'effort': ['hard', 'hard', 'hard'], 
     'RPE': False, 
     'percent': False, 
     'english': True, 
     'notes': ''}, 
     {'exercise': 'Lunges', 
      'weights': [0, 0, 0], 
      'reps': [8, 8, 8], 
      'effort': ['hard', 'hard', 'hard'], 
      'RPE': False, 
      'percent': False, 
      'english': True, 
      'notes': ''}, 
      {'exercise': 'Step-Ups', 
      'weights': [0, 0, 0], 
      'reps': [8, 8, 8], 
      'effort': ['hard', 'hard', 'hard'], 
      'RPE': False, 
      'percent': False, 
      'english': True, 
      'notes': ''}, 
      {'exercise': 
       'Stiff Leg Deadlifts', 
       'weights': [0, 0, 0], 
       'reps': [10, 10, 10], 
       'effort': ['hard', 'hard', 'hard'], 
       'RPE': False, 
       'percent': False, 
       'english': True, 
       'notes': ''}]
}
ai_response = generate_workout(exercise_data, user_string)

def update_workout_and_provide_feedback(presc_exercise_data, user_response_string):

    # Use OpenAI to generate a response in the voice of a robot
    prompt = f"provide feedback for a trainee on a workout that you programmed for them as a robot fitness trainer, the workout is stored in recent_workout in this data model {presc_exercise_data}, please update the weights and effort arrays per exercise if they give you any updates, if not do not alter them, at the very end of your response return recent_workout updated. Here is their prompt for you on details of their workout for you to give them advice on:{user_response_string}"
    response = openai.Completion.create(
        engine='text-davinci-003',
        prompt=prompt,
        temperature=0.8,
        max_tokens=1000,
        n=1,
        stop=None,
        frequency_penalty=0,
        presence_penalty=0.2
    )

    # Retrieve the generated response from OpenAI
    generated_text = response.choices[0].text.strip()

    return generated_text


        
def segment_data(ai_response:str):
    start = ai_response.find("{")
    end = ai_response.rfind("}")
    data = ai_response[start:end+1]
    return data

def segment_ai(ai_response:str):
    start_data = ai_response.find("{")
    end_data = ai_response.rfind("}")
    part_one = ai_response[0:start_data]
    part_two = ai_response[end_data:len(ai_response)]
    return part_one+part_two

def reformat_exercises_string(exercises_string):
    exercises_list = ast.literal_eval(exercises_string)
    result = ""

    for exercise in exercises_list:
        if isinstance(exercise, str):
            exercise = ast.literal_eval(exercise)
        
        exercise_name = exercise['exercise']
        reps = exercise['reps']
        effort = exercise['effort']
        notes = exercise['notes']

        result += f"{exercise_name}\n"
        result += f"{len(reps)} sets of:\n"
        for i in range(len(reps)):
            result += f"- {reps[i]} reps @ {effort[i]}\n"
        result += f"notes: {notes}\n\n"

    return result

data = segment_data(ai_response)
print("data",data)
# Example usage
#user_workout = reformat_exercises_string(data)

def ui_version(ai_response):
    data = segment_data(ai_response)
    user_workout = reformat_exercises_string(data)
    start_data = ai_response.find("{")
    end_data = ai_response.rfind("}")
    part_one = ai_response[0:start_data]
    print("p1",part_one)
    part_two = ai_response[end_data+1:len(ai_response)]
    print("p2",part_two)
    print("workout", user_workout)
    ui_return = part_one+user_workout+part_two
    return ui_return

ui_return = ui_version(ai_response)
print("ui_version:", ui_return)

#ai_only = segment_ai(ai_response)
#print("ai only:", ai_only)

#print("data object:", data)



#print("full response:",ai_response)
