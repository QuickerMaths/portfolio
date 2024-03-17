"use client";

import { Loading } from "@/components/loading";
import { useRouter } from "next/navigation";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

export enum LOADING_STATES {
  INIT = "INITIALIZED",
  LOADING = "PENDING",
  LOADED = "COMPLETE",
  FINISHED = "FINISHED",
}

export const PAGE_TRANSITION = 2000;

export interface NavigationContextType {
  goToRoute: (route: string) => void;
  loading: LOADING_STATES;
  setLoading: React.Dispatch<React.SetStateAction<LOADING_STATES>>;
  futurePath: string;
}

export const NavigationContext = createContext<NavigationContextType>({
  goToRoute: (route: string) => {},
  loading: LOADING_STATES.FINISHED,
  setLoading: () => {},
  futurePath: "",
});

export const NavigationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState<LOADING_STATES>(LOADING_STATES.FINISHED);
  const [futurePath, setFuturePath] = useState<string>("");

  const goToRoute = async (path: string) => {
    setLoading(LOADING_STATES.LOADING);
    setFuturePath(path);
    setTimeout(() => {
      router.push(path);
    }, PAGE_TRANSITION);
  };

  const contextValue = {
    goToRoute,
    loading,
    setLoading,
    futurePath,
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      <Loading />
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => useContext(NavigationContext);
