import fetch from 'node-fetch';

class RoomService {
  get = async () => {
    const response = await fetch(`${process.env.API}/posts`);
    return response.json();
  };
}
export const roomService = new RoomService();
