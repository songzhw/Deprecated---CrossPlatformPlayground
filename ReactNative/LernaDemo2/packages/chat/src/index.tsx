import { NativeModules } from 'react-native';

type ChatType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Chat } = NativeModules;

export default Chat as ChatType;
