type BubbleMessageProps = {
  isBot?: boolean;
  message: string;
};

export function BubbleMessage({ isBot, message }: BubbleMessageProps) {
  return (
    <div className={`chat ${isBot ? "chat-start" : "chat-end"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full bg-white p-2">
          <img alt="Avatar" src={`${isBot ? "bot" : "user"}.png`} />
        </div>
      </div>
      <div
        className={`chat-bubble ${
          isBot ? "bg-white" : "bg-green-300"
        } text-gray-900`}
      >
        {message || "🙌"}
      </div>
    </div>
  );
}
