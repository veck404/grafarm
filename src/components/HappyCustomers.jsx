import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { SiteReviews as reviews } from "../store/Constants";

export default function HappyCustomers() {
  const [Width, setWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;
    setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
  }, []);

  return (
    <section className="my-4 px-4 xsm:px-6 md:px-8 max-w-6xl mx-auto w-full pb-20 pt-24">
      <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-white via-lime-50 to-amber-50 px-6 py-10 shadow-lg dark:border-neutral-800 dark:from-neutral-950 dark:via-emerald-950/30 dark:to-amber-900/20 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-green-700 dark:text-emerald-300">Community Voices</p>
            <h2 className="bolded mt-2 text-3xl text-green-900 sm:text-4xl dark:text-green-200">Our happy customers</h2>
            <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
              From family kitchens to large-scale caterers, see how Graferd Farms palm oil elevates signature recipes across Nigeria.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-green-700 dark:text-emerald-300">
            <span className="flex h-2 w-2 rounded-full bg-green-600 dark:bg-emerald-400" />
            Drag to explore stories
          </div>
        </div>
        <div className="mt-10 overflow-hidden" ref={ref}>
          <motion.div
            drag="x"
            dragConstraints={{ left: -Width, right: 0 }}
            whileTap={{ cursor: "grabbing" }}
            className="flex w-fit cursor-grab gap-6 pb-4"
          >
            {reviews.map((el) => (
              <motion.div
                whileTap={{ scale: 0.97 }}
                key={el.name}
                className="flex w-[320px] flex-col gap-4 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/80 sm:w-[360px]"
              >
                <div className="flex items-center gap-2 text-amber-500">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <FaStar key={starIndex} />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{el.name}</h3>
                  <MdVerified size={20} className="text-green-600 dark:text-emerald-400" />
                </div>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{el.review}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
