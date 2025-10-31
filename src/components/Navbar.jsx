// Import necessary hooks and components from React and other libraries
import { useContext, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

// Import context for side navigation, cart, and theme
import { SideNavCtx } from "../store/SideNavContext";
import { CartCtx } from "../store/CartContext";
import { useTheme } from "../store/ThemeContext";

// Define the Navbar component
export default function Navbar() {
  // State to control the visibility of the navbar
  const [hidden, setHidden] = useState(false);
  // Get side navigation state and setter from context
  const { sideNavHidden, setSideNavHidden } = useContext(SideNavCtx);
  // Get cart items from context
  const { Cart } = useContext(CartCtx);
  const location = useLocation();
  const onCartPage = location.pathname.toLowerCase().startsWith("/cart");
  // Get theme state and toggle function from context
  const { isDark, toggle } = useTheme();

  // Get scroll position from framer-motion
  const { scrollY } = useScroll();

  // Event listener for scroll changes to show/hide the navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    // Hide navbar when scrolling down, show when scrolling up
    if (latest > prev && latest > 250) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Toggle the side navigation
  const toggleSideNav = () => {
    setSideNavHidden(!sideNavHidden);
  };

  return (
    <motion.div
      // Variants for showing and hiding the navbar with animation
      variants={{
        visible: { y: 0 },
        hidden: { y: "-160%" },
      }}
      // Animate based on the hidden state
      animate={hidden ? "hidden" : "visible"}
      // Transition type
      transition={{ type: "just" }}
      // Styling for the navbar
      className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/85 text-neutral-900 backdrop-blur-lg dark:border-neutral-800/70 dark:bg-neutral-950/80 dark:text-neutral-100"
    >
      <motion.nav className="p-4 xsm:px-6 md:px-8 pb-0 max-w-6xl mx-auto w-full flex items-center justify-between gap-6 py-3 nav:gap-12">
        {/* Logo and link to home */}
        <motion.span initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
          <Link className="bolded text-2xl font-bold text-green-900 dark:text-green-300 xsm:text-4xl" to="">
            Graferd Farms
          </Link>
        </motion.span>
        {/* Navigation links for larger screens */}
        <div className="hidden nav:flex items-center gap-8 text-sm font-medium tracking-wide">
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
            <Link className="hover:underline underline-offset-4 cursor-pointer text-neutral-700 transition hover:text-green-700 dark:text-neutral-200 dark:hover:text-green-300" to="/NewArrival">
              New Arrivals
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
            <Link className="hover:underline underline-offset-4 cursor-pointer text-neutral-700 transition hover:text-green-700 dark:text-neutral-200 dark:hover:text-green-300" to="/TopSelling">
              Top Selling
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
            <Link className="hover:underline underline-offset-4 cursor-pointer text-neutral-700 transition hover:text-green-700 dark:text-neutral-200 dark:hover:text-green-300" to="/OnSale">
              On Sale
            </Link>
          </motion.div>
        </div>

        {/* Action buttons */}
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 xsm:mt-1">
          {/* Link to the shop page */}
          <Link
            to="/Shop"
            className="hidden rounded-full border border-green-700/60 px-4 py-2 text-sm font-medium text-green-800 transition-colors hover:bg-green-700 hover:text-white dark:border-green-400/70 dark:text-green-200 dark:hover:bg-green-400 dark:hover:text-neutral-950 md:block"
          >
            Shop Oils
          </Link>
          {/* Dark mode toggle button */}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-full border border-transparent bg-neutral-100 p-2 transition-all hover:border-neutral-300 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-700"
          >
            {isDark ? (
              // Moon icon for dark mode
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M17.293 13.293a8 8 0 1 1-6.586-6.586 6 6 0 1 0 6.586 6.586Z" clipRule="evenodd" />
              </svg>
            ) : (
              // Sun icon for light mode
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 12 2.25Zm6.364 3.136a.75.75 0 0 1 1.06 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061ZM21.75 12a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75Zm-3.136 6.364a.75.75 0 0 1-1.06 1.06l-1.061-1.06a.75.75 0 1 1 1.06-1.061l1.061 1.06ZM12 18.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V19.5a.75.75 0 0 1 .75-.75Zm-6.364-3.136a.75.75 0 0 1-1.06 1.06l-1.061-1.06a.75.75 0 1 1 1.06-1.061l1.061 1.06ZM4.5 12a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1 0-1.5H3.75A.75.75 0 0 1 4.5 12Zm3.136-6.364a.75.75 0 1 1-1.06-1.06L7.636 3.515a.75.75 0 0 1 1.06 1.06L7.636 5.636Z" />
                <path d="M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            )}
          </button>

          {/* Cart icon and item count */}
          <div className="relative">
            {/* Show item count if cart is not empty */}
            {Cart > 0 && (
              <motion.div
                initial={{ scale: 1.2, y: -12, x: 12 }}
                animate={{ scale: 1, y: -12, x: 12 }}
                transition={{ type: "just" }}
                key={Cart}
                className="absolute -translate-y-[18px] translate-x-[18px] flex min-h-[20px] min-w-[20px] items-center justify-center rounded-full bg-green-700 px-1.5 py-1 text-[11px] font-semibold text-white shadow-sm dark:bg-green-400 dark:text-neutral-900"
              >
                {Cart}
              </motion.div>
            )}
            {/* Link to the cart page */}
            <Link
              to="/Cart"
              aria-label="View cart"
              className={`relative rounded-full p-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:focus-visible:outline-emerald-400 ${
                onCartPage
                  ? "bg-green-700/10 text-green-800 dark:bg-emerald-400/10 dark:text-emerald-300"
                  : "hover:text-green-700 dark:hover:text-emerald-300"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[21px] w-[21px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </Link>
          </div>
          {/* Side navigation toggle for smaller screens */}
          <div className={`${Cart ? "ml-1" : ""} block cursor-pointer rounded-full border border-neutral-200/70 p-2 nav:hidden dark:border-neutral-700`} onClick={toggleSideNav}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
}
