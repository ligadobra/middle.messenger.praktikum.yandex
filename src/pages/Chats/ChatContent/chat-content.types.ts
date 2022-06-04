export interface IChat {
  chatInfo: {
    creator: {
      name: string;
      avatar: string;
    };
    recipient: {
      name: string;
      avatar: string;
    };
  };
  messages: {
    message: string;
    time: string;
    isMy: boolean;
    isRead: boolean;
  }[];
}
