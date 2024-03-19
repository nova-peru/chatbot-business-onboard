import axios from "axios";

const API_URL = process.env.API_URL;

type FetchChatConverstionParams = {
  businessName?: string;
  businessSector?: string;
  hasEmojis?: boolean;
  hasQuickAnswers?: boolean;
};

export const fetchChatConversation = async (
  params: FetchChatConverstionParams
) => {
  try {
    const { data } = await axios.get(API_URL!, {
      params,
    });

    if (data) {
      return JSON.parse(data?.data);
    }
  } catch (error) {
    throw Error("Something failed");
  }
};
