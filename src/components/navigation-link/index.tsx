"use client";
import {
  LOADING_STATES,
  useNavigationContext,
} from "@/context/navigation.context";
import Link from "next/link";
import { ForwardedRef, forwardRef, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

type NavigateProps = {
  href: string;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  className?: string;
  children: React.ReactNode;
};

const Navigate = forwardRef((props: NavigateProps, ref: ForwardedRef<HTMLAnchorElement>) => {
  const { href, children, setOpen, className } = props;
  const { goToRoute, setLoading } = useNavigationContext();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (setOpen) {
      setOpen(false);
    }
    goToRoute(href);
  };

  useLayoutEffect(() => {
    setLoading(LOADING_STATES.LOADED);
  }, [pathname]);

  return (
    <Link prefetch passHref href={href} legacyBehavior >
      <a ref={ref} className={className} onClick={handleClick}>{children}</a>
    </Link>
  );
})


export default Navigate