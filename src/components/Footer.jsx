import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mainMargin pb-10">
      <div className="mt-16 grid gap-8 rounded-3xl border border-neutral-200 bg-gradient-to-br from-green-900 via-emerald-800 to-amber-700 px-6 py-10 text-white shadow-lg dark:border-neutral-700 dark:from-neutral-950 dark:via-emerald-950 dark:to-amber-900 md:grid-cols-[1.2fr_1fr] md:px-10 md:py-14">
        <div className="flex flex-col gap-6">
          <h2 className="bolded text-3xl sm:text-4xl">Stay ahead of every fresh press</h2>
          <p className="max-w-xl text-sm text-white/80 sm:text-base">
          Join our list of favourite customers to get the best offers, promotional and discount updates on the fly.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex flex-1 items-center rounded-full bg-white/10 px-4 py-3 shadow-inner backdrop-blur-sm">
              <MdOutlineEmail className="mr-3 h-5 w-5 text-white/70" />
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-white/60"
                placeholder="Enter your email address"
                type="email"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-green-900 transition hover:-translate-y-[2px] hover:bg-amber-100 hover:text-green-900 sm:w-auto"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/50 bg-white/5 p-6 backdrop-blur-sm">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-white/70">Hotline</span>
            <p className="mt-3 flex items-center gap-2 text-lg font-semibold">
              <MdOutlinePhone className="h-5 w-5" />
              +234 (0) 701 756 7105
            </p>
            <p className="mt-2 text-sm text-white/70">Available 8am – 8pm WAT, Monday to Saturday</p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-white/70">Chat with us</span>
            <div className="mt-3 flex items-center gap-4 text-2xl">
              <FaWhatsapp className="cursor-pointer transition hover:scale-110" />
              <FaInstagram className="cursor-pointer transition hover:scale-110" />
              <FaFacebook className="cursor-pointer transition hover:scale-110" />
              <FaXTwitter className="cursor-pointer transition hover:scale-110" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <h3 className="bolded text-2xl text-green-900 dark:text-green-200">Graferd Farms</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Supplying premium palm oil from sustainable Nigerian plantations. We help households, restaurants, and distributors bring
            authentic flavour to the table.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-900 dark:text-neutral-200">Company</h4>
          <ul className="mt-4 space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
            <li className="Links">About Graferd</li>
            <li className="Links">Sourcing Standards</li>
            <li className="Links">Wholesale Program</li>
            <li className="Links">Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-900 dark:text-neutral-200">Support</h4>
          <ul className="mt-4 space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
            <li className="Links">Customer Helpdesk</li>
            <li className="Links">Delivery & Logistics</li>
            <li className="Links">Quality Assurance</li>
            <li className="Links">Returns Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-900 dark:text-neutral-200">Resources</h4>
          <ul className="mt-4 space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
            <li className="Links">Nutritional Guide</li>
            <li className="Links">Chef Recipes</li>
            <li className="Links">Bulk Order Checklist</li>
            <li className="Links">FAQ</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-300 sm:flex-row sm:items-center sm:justify-between">
        <p>Graferd Farms © {new Date().getFullYear()} — All rights reserved.</p>
        <div className="flex gap-4">
          <span className="Links">Privacy Policy</span>
          <span className="Links">Terms of Service</span>
          <span className="Links">Cookies</span>
        </div>
      </div>
    </footer>
  );
}

