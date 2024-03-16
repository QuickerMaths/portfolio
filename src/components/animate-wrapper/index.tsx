"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  createContext,
  MouseEventHandler,
  PropsWithChildren,
  use,
  useTransition,
} from "react";
import { sleep, PAGE_TRANSITION_DURATION } from "@/lib/utils";

export const DELAY = 100;

const noop = () => {};

type TransitionContext = {
  pending: boolean;
  navigate: (url: string) => void;
};
const Context = createContext<TransitionContext>({
  pending: false,
  navigate: noop,
});
export const usePageTransition = () => use(Context);
export const usePageTransitionHandler = () => {
  const { navigate } = usePageTransition();
  const onClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) navigate(href);
  };

  return onClick;
};

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function Transitions({ children, className }: Props) {
  const [pending, start] = useTransition();
  const router = useRouter();
  const navigate = (href: string) => {
    start(async () => {
      router.push(href);
      await sleep(PAGE_TRANSITION_DURATION + DELAY);
    });
  };

  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const a = (e.target as Element).closest("a");
    if (a) {
      e.preventDefault();
      const href = a.getAttribute("href");
      if (href) navigate(href);
    }
  };

  return (
    <Context.Provider value={{ pending, navigate }}>
      <div onClickCapture={onClick} className={className}>
        {children}
      </div>
    </Context.Provider>
  );
}

export function Animate({ children, className }: Props) {
  const { pending } = usePageTransition();
  return (
    <LayoutGroup>
      <AnimatePresence>
        {!pending && (
          <motion.div
            initial={{ opacity: 0, scale: 2, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0}}
            exit={{ opacity: 0, scale: 0.5, y: -100}}
            transition={{ duration: PAGE_TRANSITION_DURATION / 1000 }}
            className={className}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}