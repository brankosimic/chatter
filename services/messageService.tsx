import fetch from 'node-fetch';
import customMessages from '../mocked/customMessages';
import formatter from '../utils/formatter';

const api = 'https://jsonplaceholder.typicode.com';

class MessageService {
  get = async (roomId: number) => {
    const response = await fetch(`${api}/posts/${roomId}/comments`);
    let result = await response.json();
    result = [...result, ...customMessages];
    result = formatter(result);
    return result;
  };

  post = async (roomId: number, text: string) => {
    const response = await fetch(`${api}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        postId: roomId,
        body: text,
        email: 'anonymous',
        name: 'anonymous',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json();
  };
}

export const messageService = new MessageService();
