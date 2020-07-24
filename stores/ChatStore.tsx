import { observable, action } from 'mobx';
import { roomService } from '../services/roomService';
import { messageService } from '../services/messageService';
import formatter from '../utils/formatter';
import { Room } from '../models/room';
import { Message } from '../models/message';

export class ChatStore {
  @observable rooms: Room[] = [];
  @observable activeRoomId: number | null = null;
  @observable messages: Message[] = [];
  @observable isTyping = false;

  @action
  public load = async (): Promise<void> => {
    this.rooms = await roomService.get();
    this.loadMessages(this.rooms[0].id);
  };

  @action
  public loadMessages = async (roomId: number): Promise<void> => {
    this.messages = await messageService.get(roomId);
    this.activeRoomId = roomId;
  };

  @action
  public postMessage = async (text: string): Promise<void> => {
    const message = await messageService.post(this.activeRoomId, text);
    const formatted = formatter([message]);
    this.messages = [...this.messages, ...formatted];
    this.isTyping = false;
  };

  @action
  public setIsTyping = (value: boolean): void => {
    this.isTyping = value;
  };
}
