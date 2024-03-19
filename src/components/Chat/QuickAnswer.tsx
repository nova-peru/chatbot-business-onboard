type QuickAnswerProps = {
  message: string;
};

export function QuickAnswer({ message }: QuickAnswerProps) {
  return (
    <div className={`w-full px-12 mb-1`}>
      <div
        className={` bg-white text-gray-900 p-2 rounded-md shadow-sm w-full text-center`}
      >
        {message}
      </div>
    </div>
  );
}
