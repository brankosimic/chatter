/* eslint-disable @typescript-eslint/no-explicit-any */
import { Message } from '../models/message';

const formatter = (result: Message[]): Message[] => {
  result.forEach((message) => {
    message.formatted = format(message.body);
  });

  return result;
};

const format = (data: any) => {
  switch (data.constructor) {
    case String:
      return data;
    case Object:
      return formatObject(data);
    case Array:
      return formatArray(data);
    default:
      return '';
  }
};

const formatObject = (obj: any) => {
  let formatted = obj.tmpl || '';
  if (obj.tmpl && obj.data) {
    Object.keys(obj.data).forEach(
      (key) =>
        (formatted = formatted.replace(new RegExp(`{${key}}`), obj.data[key])),
    );
  }
  return formatted;
};

const formatArray = (arr: any[]) => {
  const joined = arr.map((data) => format(data)).join('\n');
  return joined;
};

export default formatter;
