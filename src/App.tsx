import { useCallback, useState } from "react";

import { Chat, Footer, Form, Header } from "./components";
import { fetchChatConversation } from "./services";
import { ChatConversation } from "./types";
import { useAppStore } from "./store";

function App() {
  const {
    businessName,
    businessSector,
    hasEmojis,
    hasQuickAnswers,
    isLoading,
    hasError,
    updateIsLoading,
    updateHasError,
  } = useAppStore();

  const [conversation, setConversation] = useState<ChatConversation>();

  const handlePrevisualize = useCallback(async () => {
    updateIsLoading(true);
    updateHasError(false);

    try {
      const data = await fetchChatConversation({
        businessName,
        businessSector,
        hasEmojis: hasEmojis || undefined,
        hasQuickAnswers: hasQuickAnswers || undefined,
      });

      setConversation(data);
    } catch (error) {
      updateHasError(true);
    } finally {
      updateIsLoading(false);
    }
  }, [
    businessName,
    businessSector,
    hasEmojis,
    hasQuickAnswers,
    updateIsLoading,
    updateHasError,
  ]);

  return (
    <>
      <Header />

      <div className="flex justify-center space-x-10">
        <Form onPreview={handlePrevisualize} />

        <div className="divider lg:divider-horizontal" />

        <Chat
          businessName={businessName}
          isLoading={isLoading}
          messages={conversation?.conversation}
          hasError={hasError}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
