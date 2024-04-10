import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Container = {
  id: string;
};

type StoreState = {
  containers: Container[];
  windows: any[];
};

type StoreActions = {
  addContainer: () => void;
  removeContainer: (id: string) => void;
};

type Store = StoreState & StoreActions;

const initialStoreState: StoreState = {
  containers: [],
  windows: [],
};

const useAppStore = create<Store>()(
  devtools((set) => ({
    ...initialStoreState,
    addContainer: () =>
      set((state) => ({
        containers: [...state.containers, { id: self.crypto.randomUUID() }],
      })),
    removeContainer: (id: string) =>
      set((state) => ({
        containers: state.containers.filter((container) => container.id !== id),
      })),
  }))
);

export default useAppStore;
