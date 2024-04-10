import { create } from "zustand";
import { devtools } from "zustand/middleware";

type ContainerItem = {
  id: string;
};

type WindowItem = {
  id: string;
  parentId?: string;
};

type StoreState = {
  containers: ContainerItem[];
  windows: WindowItem[];
};

type StoreActions = {
  add: (type: "containers" | "windows") => void;
  remove: (type: "containers" | "windows", id: string) => void;
  freeWindow: (id: string) => void;
};

type Store = StoreState & StoreActions;

const initialStoreState: StoreState = {
  containers: [],
  windows: [],
};

const useAppStore = create<Store>()(
  devtools((set) => ({
    ...initialStoreState,
    add: (type: "containers" | "windows") =>
      set((state) => ({
        [type]: [...state[type], { id: self.crypto.randomUUID() }],
      })),
    remove: (type: "containers" | "windows", id: string) =>
      set((state) => ({
        [type]: state[type].filter(
          (key: ContainerItem | WindowItem) => key.id !== id
        ),
      })),
    freeWindow: (id: string) =>
      set((state) => ({
        windows: state.windows.map((window) =>
          window.parentId === id ? { ...window, parentId: undefined } : window
        ),
      })),
  }))
);

export default useAppStore;
