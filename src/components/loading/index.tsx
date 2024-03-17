import { LOADING_STATES, useNavigationContext } from "@/context/navigation.context";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ANIMATION_DURATION } from "@/context/navigation.context";

export const Loading = () => {
  const { loading, setLoading } = useNavigationContext();
  const controls = useAnimation();

  const initial = async () => {
    await controls.start({
        clipPath: "polygon(0% 0%, 100% 0%, 0% 100%, 0% 100%)",
    });
  };

  const animate = async () => {
    await controls.start({
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      transition: { duration: ANIMATION_DURATION / 1000, ease: "easeInOut" },
    });
    if (loading === LOADING_STATES.LOADED) {
        setLoading(LOADING_STATES.FINISHED);
      }
  };

  const exit = async () => {
    await controls.start({
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      transition: { duration: ANIMATION_DURATION / 1000, ease: "easeInOut" },
    });
    if (loading === LOADING_STATES.INIT) setLoading(LOADING_STATES.LOADED);
  };

  useEffect(() => {
    initial();
  }, []);

  useEffect(() => {
    if (loading === LOADING_STATES.INIT) exit();
    if (loading === LOADING_STATES.LOADED) animate();
    if (loading === LOADING_STATES.LOADING) exit();
  }, [loading]);

  return (
    <>
        {loading !== LOADING_STATES.FINISHED && (
          <motion.div
          animate={controls}
          className="h-screen w-screen fixed flex flex-col gap-4 items-center justify-center bg-secondary z-50"
        >
          <p className="text-5xl text-primary font-medium">Welcome</p>
          <p className="text-primary">{loading}</p>
        </motion.div>
        )}
    </>
  );
};