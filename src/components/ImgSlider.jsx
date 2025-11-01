import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import RateCost from "./RateCost";
import { useNavigate } from "react-router-dom";
import { Products } from "../store/Constants";
import Img from "./Img";

export default function ImgSlider({ type, del = "no", id }) {
  const [Width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();

  const mainDiv = useRef();
  const inView = useInView(mainDiv, { once: true });
  const MainControls = useAnimation();

  const ProductsByType = Products.filter((el) => el.type === type && (del === "no" ? true : el.id !== id));

  useEffect(() => {
    if (inView) {
      MainControls.start("visible");
    }
  }, [inView, MainControls]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const updateMatch = () => setIsMobile(window.innerWidth < 640);
    updateMatch();
    window.addEventListener("resize", updateMatch);
    return () => window.removeEventListener("resize", updateMatch);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!ref.current) return;
      setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
    }, 1);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClick = (name) => {
    return () => {
      navigate(`/Shop/${name}`);
    };
  };

  const visibleProducts = isMobile ? ProductsByType.slice(0, 1) : ProductsByType;

  return (
    <div className="mt-10 flex justify-center overflow-hidden sm:justify-start" ref={ref}>
      <motion.div
        drag="x"
        dragConstraints={{ left: -Width, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
        ref={mainDiv}
        className={`flex w-fit gap-5 cursor-pointer ${isMobile ? "justify-center" : ""}`}
      >
        {visibleProducts.map((el, index) => {
          return (
            <motion.div key={index} whileTap={{ scale: 0.97 }} className="flex justify-center">
              <motion.div
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -75 },
                }}
                transition={{ delay: index * 0.1, type: "just" }}
                initial="hidden"
                animate={MainControls}
                className="mx-auto flex w-[260px] flex-col gap-4 rounded-3xl border border-neutral-200/70 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/70"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="group overflow-hidden rounded-2xl bg-lime-50/60 dark:bg-neutral-800/60"
                  onClick={handleClick(el.name)}
                >
                  <Img className="h-[230px] w-full transition duration-500 group-hover:scale-105" draggable="false" src={el.src} alt={el.name} />
                </motion.div>
                <div className="px-1 pb-1">
                  <RateCost name={el.name} stars={el.stars} cost={el.cost} discount={el.discount} />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
