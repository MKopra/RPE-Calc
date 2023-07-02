import axios from 'axios';

export var USER: any = "6498904c419d284a1cff301a"
//export var USER: undefined

const BASE_URL = 'http://127.0.0.1:8000';

export async function fetchData(userId: string): Promise<any> {
  const url = `${BASE_URL}/exercises/${userId}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}
