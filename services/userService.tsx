import fetch from 'node-fetch';
import { User } from '../models/user';
class UserService {
  getAll = async (): Promise<User[]> => {
    const response = await fetch(`${process.env.API}/users`);
    return response.json();
  };

  get = async (userId: number): Promise<User> => {
    const response = await fetch(`${process.env.API}/users/${userId}`);
    return response.json();
  };
}
export const userService = new UserService();
