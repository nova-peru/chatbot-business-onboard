import { memo } from "react";

import { BubbleMessage } from "./BubbleMessage";
import { QuickAnswer } from "./QuickAnswer";

import { ChatMessage } from "../../types";
import { ContactUsBtn } from "..";
import { ErrorMessage } from "./ErrorMessage";

type ChatProps = {
  businessName?: string;
  messages?: ChatMessage[];
  isLoading?: boolean;
  hasError?: boolean;
};

export const Chat = memo(
  ({ businessName, messages = [], isLoading, hasError }: ChatProps) => (
    <div className="flex flex-1 justify-start">
      <div className="mockup-phone m-0">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard phone-2 bg-slate-100 flex flex-col">
            <div className="h-10 w-full" />
            <div className="flex items-center w-full h-14 pl-4 space-x-3 bg-green-600">
              <div className="avatar">
                <div className="w-10 rounded-full bg-white p-2">
                  <img src="bot.png" />
                </div>
              </div>

              <p className="font-semibold text-white">{businessName}</p>
            </div>

            <div className="px-2 py-4 flex-1 overflow-y-auto">
              {hasError && !isLoading ? <ErrorMessage /> : null}

              {messages.length === 0 && !isLoading ? (
                <BubbleMessage
                  isBot
                  message="Bienvenido! En que te puedo ayudar?"
                />
              ) : null}

              {messages.length > 0 ? (
                <>
                  {messages?.map((message, index) => {
                    return (
                      <div key={index}>
                        <BubbleMessage
                          isBot={message?.emitter === "bot"}
                          message={message?.message}
                        />

                        {message?.quick_answers
                          ? message?.quick_answers?.map((answer, i) => (
                              <QuickAnswer key={i} message={answer} />
                            ))
                          : null}
                      </div>
                    );
                  })}

                  <div className="mt-2 p-2">
                    <ContactUsBtn />
                  </div>
                </>
              ) : null}

              {isLoading ? (
                <div className="h-full grid place-items-center">
                  <span className="loading loading-ring loading-lg"></span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
);
