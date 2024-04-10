import { create } from "zustand";
import { devtools } from "zustand/middleware";

type StoreState = {
  something: string;
  values: number[];
};

type StoreActions = {
  updateValues: (values: number[]) => void;
  updateValuesWithReplace: (values: number[]) => void;
  updateSomething: (value: string) => void;
  updateSomethingWithReplace: (value: string) => void;
  reset: () => void;
};

type Store = StoreState & StoreActions;

const initialStoreState: StoreState = {
  something: "initial",
  values: [],
};

const useAppStore = create<Store>()(
  devtools((set) => ({
    ...initialStoreState,
    updateValues: (values: number[]) => set({ values }, false, "updateValues"),
    updateValuesWithReplace: (values: number[]) =>
      set((state) => ({ ...state, values }), true, "updateValuesWithReplace"),
    updateSomething: (value) =>
      set(() => ({ something: value }), false, "updateSomething"),
    updateSomethingWithReplace: (value) =>
      set(() => ({ something: value }), false, "updateSomethingWithReplace"),
    reset: () => set({ ...initialStoreState }, false, "reset"),
  }))
);

export default useAppStore;
