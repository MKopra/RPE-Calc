import axios from 'axios';
import { User } from './login';


//export var USER: any = "6498904c419d284a1cff301a"
//export var USER: undefined

const BASE_URL = 'http://127.0.0.1:8000';

export async function fetchData(userId: string): Promise<any> {
  const url = `${BASE_URL}/exercises/${userId}`;

  try {
    const response = await axios.get(url); // chnage made
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchRMHistory(userId: string, exerciseName: string): Promise<any> {
  const url = `${BASE_URL}/rpe-historical/${userId}?exerciseName=${exerciseName}`;
  console.log("fetchRMHistory user_id:", userId, "name", exerciseName);
  try {
    const response = await axios.get(url);
    console.log("fetch response", response);
    return response.data;
  } catch (error) {
    throw error;
  }
}

