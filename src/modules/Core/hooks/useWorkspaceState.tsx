import {
  createContext,
  useCallback,
  useContext,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";

interface Dims {
  width: number;
  height: number;
}

export function useWorkspaceState() {
  const stored = localStorage.getItem("dims");
  const dims = stored ? JSON.parse(stored) : null;
  const [dimensions, _setDimensions] = useState(dims ?? null);
  const setDimensions = useCallback(
    (value: null | Dims) => {
      _setDimensions(value);
      if (value === null) {
        localStorage.removeItem("dims");
      } else {
        localStorage.setItem("dims", JSON.stringify(value));
      }
    },
    [_setDimensions]
  );

  return {
    dimensionsController: [dimensions, setDimensions],
  };
}

const WorkspaceStateContext = createContext<
  ReturnType<typeof useWorkspaceState>
>({
  dimensionsController: [null, (d: any) => {}],
});
export function WorkspaceProvider({ children }: PropsWithChildren) {
  const state = useWorkspaceState();

  return (
    <WorkspaceStateContext.Provider value={state}>
      {children}
    </WorkspaceStateContext.Provider>
  );
}

export function useWorkspaceContext() {
  return useContext(WorkspaceStateContext);
}
