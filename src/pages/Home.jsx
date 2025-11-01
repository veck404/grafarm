import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuShieldCheck, LuSprout, LuDroplet, LuTruck, LuShoppingCart } from "react-icons/lu";
import HomeSliders from "../components/HomeSliders";
import HappyCustomers from "../components/HappyCustomers";
import Img from "../components/Img";
import mainJpg from "../Svgs/main.jpg";

export default function Home({ to = "" }) {
  const NewArrival = useRef();
  const TopSelling = useRef();
  const OnSale = useRef();

  useEffect(() => {
    if (to === "") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    if (to === "NewArrival") {
      window.scrollTo({
        top: NewArrival.current.offsetTop,
        behavior: "smooth",
      });
    } else if (to === "TopSelling") {
      window.scrollTo({
        top: TopSelling.current.offsetTop,
        behavior: "smooth",
      });
    } else if (to === "OnSale") {
      window.scrollTo({
        top: OnSale.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [to]);

  const featureHighlights = [
    {
      title: "Cold-Pressed Freshness",
      description: "Pure, unadulterated palm oil pressed within 24 hours of harvest for unbeatable flavour and aroma.",
      icon: LuSprout,
    },
    {
      title: "Certified Quality",
      description: "Every batch is lab-tested and traceable back to our partner plantations for full transparency.",
      icon: LuShieldCheck,
    },
    {
      title: "Silky Golden Texture",
      description: "Ultra-smooth consistency that finishes sauces, soups, and grills with a vibrant golden sheen.",
      icon: LuDroplet,
    },
    {
      title: "Nationwide Delivery",
      description: "Temperature-controlled logistics keep your oils fresh and shelf-ready no matter the distance.",
      icon: LuTruck,
    },
  ];

  const journeySteps = [
    {
      title: "Harvest & Selection",
      copy: "Handpicked palm fruit bunches from sustainable groves with zero-waste milling practices.",
    },
    {
      title: "Cold Extraction",
      copy: "State-of-the-art cold-pressing preserves nutrients, colour, and the signature fresh aroma.",
    },
    {
      title: "Quality Assurance",
      copy: "Triple filtration and lab checks guarantee clarity, stable smoke point, and consistent flavour.",
    },
    {
      title: "Delivered Fresh",
      copy: "Dispatched in food-grade containers with freshness seals for households, restaurants, and distributors.",
    },
  ];

  return (
    <>
      <section className="p-4 xsm:px-6 md:px-8 pb-0 max-w-6xl mx-auto w-full pt-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-lime-50 via-white to-amber-50 px-6 py-12 shadow-lg dark:from-emerald-950/40 dark:via-neutral-950 dark:to-amber-900/30 md:px-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.35, scale: 1.05 }}
            transition={{ duration: 1.2 }}
            className="pointer-events-none absolute -left-32 -top-20 h-64 w-64 rounded-full bg-lime-300/40 blur-3xl dark:bg-emerald-500/20"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.35, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-amber-300/40 blur-3xl dark:bg-amber-500/20"
          />

          <div className="relative flex flex-col-reverse items-center gap-14 md:flex-row md:items-start">
            <div className="relative z-10 flex w-full flex-col gap-6 md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-lime-400/70 bg-white/70 px-4 py-2 text-sm font-medium text-lime-700 dark:border-emerald-500/30 dark:bg-neutral-900/80 dark:text-emerald-200"
              >
                <span className="h-2 w-2 rounded-full bg-lime-500 dark:bg-emerald-300" />
                Freshly pressed & sustainably sourced
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="bolded text-4xl leading-tight text-green-800 sm:text-5xl md:text-6xl dark:text-green-200"
              >
                Premium Palm Oil for Bold, Authentic Flavour
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="max-w-xl text-lg text-neutral-700 sm:text-xl dark:text-neutral-300"
              >
                From home kitchens to professional chefs, our palm oil delivers the rich taste, silky texture, and nutritional value
                that West African cuisine is known for. Experience harvest-fresh oils crafted for stews, soups, bakes, and grills.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-4 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-green-800 px-8 py-3 text-white shadow-lg shadow-green-800/20 transition hover:-translate-y-1 hover:bg-green-700 sm:w-auto dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-neutral-950"
                  to="Shop"
                >
                  <LuShoppingCart aria-hidden="true" className="text-lg" />
                  Place Order
                </Link>
                <Link
                  className="w-full rounded-full border border-green-700/70 bg-white/70 px-8 py-3 text-center font-semibold text-green-800 transition hover:-translate-y-1 hover:border-green-800 hover:bg-white sm:w-auto dark:border-emerald-400/60 dark:bg-neutral-900/60 dark:text-emerald-200 dark:hover:border-emerald-300 dark:hover:bg-neutral-900"
                  to="NewArrival"
                >
                  Explore Fresh Harvest
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-12 grid w-full gap-4 sm:grid-cols-3"
              >
                {[
                  { value: "200+", label: "Wholesale partners" },
                  { value: "2,000+", label: "Gallons delivered" },
                  { value: "300+", label: "Five-star reviews" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 * index }}
                    className="rounded-2xl border border-white/60 bg-white/70 p-4 text-center shadow-sm backdrop-blur-sm dark:border-neutral-700/60 dark:bg-neutral-900/70"
                  >
                    <p className="text-3xl font-semibold text-green-800 dark:text-emerald-300">{stat.value}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative flex w-full max-w-[420px] justify-center md:w-1/2 md:justify-end"
            >
              <div className="relative w-full overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-xl backdrop-blur-sm dark:border-neutral-700/70 dark:bg-neutral-900/70">
                <Img className="h-full w-full" src={mainJpg} alt="Fresh palm fruit ready for processing" img="palm fruit" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.3 }}
                  className="absolute bottom-5 left-5 flex max-w-xs flex-col gap-2 rounded-2xl bg-white/90 p-4 text-neutral-800 shadow-lg backdrop-blur-sm dark:bg-neutral-950/80 dark:text-neutral-100"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-green-700 dark:text-emerald-300">Best Seller</span>
                  <p className="text-sm font-medium">Small, Medium and Large jerry can</p>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">Ships within 24 hours nationwide</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="my-4 px-4 xsm:px-6 md:px-8 max-w-6xl mx-auto w-full mt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-neutral-200 bg-white px-6 py-10 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 md:px-10"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="bolded text-3xl text-green-900 sm:text-4xl dark:text-green-200">Trusted by kitchens that serve thousands daily</h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                Leading restaurants, caterers, and food brands rely on our supply chain to keep their menus vibrant. Seamless bulk ordering,
                reliable restocking, and consistent taste keeps your customers coming back.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-neutral-600 dark:text-neutral-400 sm:grid-cols-4">
              {["Farm-to-Table", "Export Ready", "Zero Adulteration", "Chef Approved"].map((item) => (
                <div key={item} className="rounded-full border border-neutral-200 px-4 py-2 text-center dark:border-neutral-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="my-4 px-4 xsm:px-6 md:px-8 max-w-6xl mx-auto w-full mt-16">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }}>
          <p className="text-sm uppercase tracking-[0.4em] text-green-700 dark:text-emerald-300">Why Graferd</p>
          <h2 className="bolded mt-3 text-3xl text-green-900 sm:text-4xl dark:text-green-200">From harvest to bottle, quality leads the way</h2>
          <p className="mt-4 max-w-3xl text-neutral-600 dark:text-neutral-300">
            Every step of our process is engineered to respect the farmers who nurture the palms and the chefs who rely on our oils. Explore
            the Graferd promise.
          </p>
        </motion.div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {featureHighlights.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: 0.08 * index }}
              className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-100 text-green-700 transition-colors group-hover:bg-green-600 group-hover:text-white dark:bg-emerald-900/40 dark:text-emerald-300 dark:group-hover:bg-emerald-500 dark:group-hover:text-neutral-950">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
              <p className="mt-3 text-neutral-600 dark:text-neutral-300">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="my-4 px-4 xsm:px-6 md:px-8 max-w-6xl mx-auto w-full mt-20">
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-white via-lime-50 to-amber-50 px-6 py-12 shadow-lg dark:border-neutral-800 dark:from-neutral-950 dark:via-emerald-950/30 dark:to-amber-900/20 md:px-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }}>
            <p className="text-sm uppercase tracking-[0.4em] text-green-700 dark:text-emerald-300">Our Journey</p>
            <h2 className="bolded mt-3 text-3xl text-green-900 sm:text-4xl dark:text-green-200">Harvest-to-table in four purposeful steps</h2>
            <p className="mt-4 max-w-3xl text-neutral-600 dark:text-neutral-300">We guard freshness and authenticity at each stage so you always receive palm oil with a clean flavour profile.</p>
          </motion.div>
          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="mt-10 grid gap-8 md:grid-cols-2"
          >
            {journeySteps.map((step, index) => (
              <motion.li
                key={step.title}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                className="relative rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/80"
              >
                <span className="absolute -top-3 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-white shadow-md dark:bg-emerald-500 dark:text-neutral-950">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-neutral-900 dark:text-neutral-100">{step.title}</h3>
                <p className="mt-3 text-neutral-600 dark:text-neutral-300">{step.copy}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      <div ref={NewArrival}>
        <HomeSliders text="5 Litres" type="newarrival" />
      </div>
      <div ref={TopSelling}>
        <HomeSliders text="10 Litres" type="topselling" />
      </div>
      <div ref={OnSale}>
        <HomeSliders text="25 Litres" type="onsale" />
      </div>

      <HappyCustomers />
    </>
  );
}
