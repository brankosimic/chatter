import fetch from 'node-fetch';

class UserService {
  getAll = async () => {
    const response = await fetch(`${process.env.API}/users`);
    return response.json();
  };

  get = async (userId: number) => {
    const response = await fetch(`${process.env.API}/users/${userId}`);
    return response.json();
  };
}
export const userService = new UserService();
