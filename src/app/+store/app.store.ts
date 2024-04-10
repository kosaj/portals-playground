import { create } from "zustand";
import { devtools } from "zustand/middleware";

type StoreState = {
  something: string;
  values: number[];
};

type StoreActions = {
  updateValues: (values: number[]) => void;
  updateSomething: (value: string) => void;
  updateSomethingWithReplace: (value: string) => void;
};

type Store = StoreState & StoreActions;

const initialStoreState: StoreState = {
  something: "initial",
  values: [],
};

const useAppStore = create<Store>()(
  devtools((set) => ({
    ...initialStoreState,
    updateValues: (values: number[]) => set({ values }),
    updateSomething: (value) =>
      set((state) => ({ ...state, something: value })),
    updateSomethingWithReplace: (value) =>
      set(() => ({ something: value }), true),
  }))
);

export default useAppStore;
