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

export const ANIMATION_DURATION = 1000;

export interface NavigationContextType {
  goToRoute: (route: string) => void;
  loading: LOADING_STATES;
  setLoading: React.Dispatch<React.SetStateAction<LOADING_STATES>>;
}

export const NavigationContext = createContext<NavigationContextType>({
  goToRoute: (route: string) => {},
  loading: LOADING_STATES.INIT,
  setLoading: () => {},
});

export const NavigationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState<LOADING_STATES>(LOADING_STATES.INIT);

  const goToRoute = async (path: string) => {
    setLoading(LOADING_STATES.LOADING);
    setTimeout(() => {
      router.push(path);
    }, ANIMATION_DURATION);
  };

  const contextValue = {
    goToRoute,
    loading,
    setLoading,
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      <Loading />
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => useContext(NavigationContext);
