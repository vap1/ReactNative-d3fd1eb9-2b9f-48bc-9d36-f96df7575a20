
import axios from 'axios';
import { User } from '../types/UserTypes';

const BASE_URL = 'http://your-api-base-url.com'; // Replace with your actual API base URL

export const getDataDisplay = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(`${BASE_URL}/data-display`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data display:', error);
    throw error;
  }
};