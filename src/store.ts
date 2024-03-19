import { create } from "zustand";

interface AppState {
  businessName: string;
  businessSector: string;
  hasEmojis: boolean;
  hasQuickAnswers: boolean;
  isLoading: boolean;
  hasError: boolean;
  updateBusinessName: (payload: string) => void;
  updateBusinessSector: (payload: string) => void;
  updateHasEmojis: (payload: boolean) => void;
  updateHasQuickAnswers: (payload: boolean) => void;
  updateIsLoading: (payload: boolean) => void;
  updateHasError: (payload: boolean) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  businessName: "",
  businessSector: "",
  hasEmojis: false,
  hasQuickAnswers: false,
  isLoading: false,
  hasError: false,
  updateBusinessName: (payload) => set(() => ({ businessName: payload })),
  updateBusinessSector: (payload) => set(() => ({ businessSector: payload })),
  updateHasEmojis: (payload) => set(() => ({ hasEmojis: payload })),
  updateHasQuickAnswers: (payload) => set(() => ({ hasQuickAnswers: payload })),
  updateIsLoading: (payload) => set(() => ({ isLoading: payload })),
  updateHasError: (payload) => set(() => ({ hasError: payload })),
}));
