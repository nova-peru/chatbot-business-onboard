export type ChatMessage = {
  emitter: "bot" | "client";
  message: string;
  quick_answers: string[];
};

export type ChatConversation = {
  conversation: ChatMessage[];
};
