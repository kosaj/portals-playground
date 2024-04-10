import { HtmlPortalNode, createHtmlPortalNode } from "react-reverse-portal";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type ContainerItem = {
  id: string;
};

type WindowItem = {
  id: string;
  portalNode: HtmlPortalNode<React.Component<unknown>>;
  parentId?: string;
};

type StoreState = {
  containers: ContainerItem[];
  windows: WindowItem[];
  counter: number;
};

type StoreActions = {
  add: (type: "containers" | "windows") => void;
  remove: (type: "containers" | "windows", id: string) => void;
  freeWindow: (id: string) => void;
  assignAvailableWindow: (parentId: string) => void;
};

type Store = StoreState & StoreActions;

const initialStoreState: StoreState = {
  containers: [],
  windows: [],
  counter: 0,
};

const useAppStore = create<Store>()(
  devtools((set) => ({
    ...initialStoreState,
    add: (type: "containers" | "windows") =>
      set((state) => {
        if (type === "windows") {
          return {
            windows: [
              ...state.windows,
              {
                id: self.crypto.randomUUID(),
                portalNode: createHtmlPortalNode(),
              },
            ],
          };
        }

        return {
          containers: [...state.containers, { id: self.crypto.randomUUID() }],
        };
      }),
    remove: (type: "containers" | "windows", id: string) =>
      set((state) => ({
        [type]: state[type].filter(
          (key: ContainerItem | WindowItem) => key.id !== id
        ),
      })),
    freeWindow: (id: string) =>
      set((state) => ({
        windows: state.windows.map((window) =>
          window.id === id ? { ...window, parentId: undefined } : window
        ),
      })),
    assignAvailableWindow: (parentId: string) =>
      set((state) => {
        const availableWindow = state.windows.find(
          (window) => !window.parentId
        );

        if (availableWindow) {
          return {
            windows: state.windows.map((window) =>
              window.id === availableWindow.id
                ? { ...window, parentId }
                : window
            ),
          };
        }

        return state;
      }),
  }))
);

export default useAppStore;
