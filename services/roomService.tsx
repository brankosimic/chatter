import fetch from 'node-fetch';

const api = 'https://jsonplaceholder.typicode.com';

class RoomService {
  get = async () => {
    const response = await fetch(`${api}/posts`);
    return response.json();
  };
}
export const roomService = new RoomService();
