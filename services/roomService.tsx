import fetch from 'node-fetch';
import { Room } from '../models/room';

class RoomService {
  get = async (): Promise<Room[]> => {
    const response = await fetch(`${process.env.API}/posts`);
    return response.json();
  };
}
export const roomService = new RoomService();
