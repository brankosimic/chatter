import { observable, action } from 'mobx';
import { roomService } from '../services/roomService';
import { messageService } from '../services/messageService';

export class ChatStore {
  @observable rooms: any[] = [];
  @observable activeRoomId: number | null = null;
  @observable messages: any[] = [];

  @action
  public load = async () => {
    this.rooms = await roomService.get();
    this.loadMessages(this.rooms[0].id);
  };

  @action
  public loadMessages = async (roomId: number) => {
    this.messages = await messageService.get(roomId);
    this.activeRoomId = roomId;
  };

  @action
  public postMessage = async (text: string) => {
    const message = await messageService.post(this.activeRoomId, text);
    this.messages = [...this.messages, message];
  };
}
