import { LOADING_STATES, useNavigationContext } from "@/context/navigation.context";
import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { PAGE_TRANSITION } from "@/context/navigation.context";

export const Loading = () => {
  const { loading, setLoading, futurePath } = useNavigationContext();
  const controls = useAnimationControls();

  const initial = async () => {
    await controls.start({
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });
  };

  const animate = async () => {
    await controls.start({
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      transition: { duration: PAGE_TRANSITION / 1000, ease: "anticipate" },
    })
      if (loading === LOADING_STATES.LOADED) {
        setLoading(LOADING_STATES.FINISHED);
      }
  };

  const exit = async () => {
    await controls.start({
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      transition: { duration: PAGE_TRANSITION / 1000, ease: "anticipate" },
    });
    if (loading === LOADING_STATES.INIT || loading === LOADING_STATES.LOADING) {
        setLoading(LOADING_STATES.LOADED);
    }
  };

  useEffect(() => {
    initial();
  }, []);

  useEffect(() => {
    if (loading === LOADING_STATES.INIT) exit();
    if (loading === LOADING_STATES.LOADED) animate();
    if (loading === LOADING_STATES.LOADING) exit();
  }, [loading]);

  const letters = futurePath.toUpperCase().split("")

  return (
    <>
        {loading !== LOADING_STATES.FINISHED && (
          <motion.div
          animate={controls}
          initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
          className="h-screen w-screen fixed flex flex-col gap-4 items-center justify-center bg-secondary z-50 overflow-hidden"
        >
          <ul className="flex justify-center items-center gap-1 flex-wrap">
              {letters.map((letter, index) => (
                <motion.li
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: PAGE_TRANSITION / 1000 / 2 + 0.1 * index }}
                  className="text-xl md:text-5xl text-primary font-semibold"
                  key={index}
                >
                  {letter}
                </motion.li>
              ))}
          </ul>
        </motion.div>
        )}
    </>
  );
};