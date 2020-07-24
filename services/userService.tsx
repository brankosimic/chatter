import fetch from "node-fetch";

const api = "https://jsonplaceholder.typicode.com";

class UserService {
  getAll = async () => {
    const response = await fetch(`${api}/users`);
    return response.json();
  };

  get = async (userId: number) => {
    const response = await fetch(`${api}/users/${userId}`);
    return response.json();
  };
}
export const userService = new UserService();
