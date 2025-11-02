import { useContext, useEffect, useState } from "react"
import CartLayout from "../components/CartLayout"
import { Link } from "react-router-dom"
import { CartCtx } from "../store/CartContext"
import { motion, AnimatePresence } from "framer-motion";

import { IoIosArrowForward } from "react-icons/io";
import Img from "../components/Img"

const WHATSAPP_NUMBER = "2347017567105";

export default function Cart() {
  const { Cost, Items } = useContext(CartCtx);
  const [customerName, setCustomerName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const subtotal = Number(Cost || 0);
  const formatCurrency = (amount) => `₦${Number(amount ?? 0).toLocaleString("en-NG")}`;
  const deliveryFee = 15;
  const total = deliveryFee + subtotal;

  const handleCheckout = () => {
    if (!Items.length) {
      return;
    }

    if (!customerName.trim() || !deliveryAddress.trim()) {
      setFormError("Please provide your name and delivery address before checking out.");
      return;
    }

    setFormError("");

    const orderLines = Items
      .map((item, index) => {
        const attributes = [item.size && `Size: ${item.size}`, item.color && `Color: ${item.color}`]
          .filter(Boolean)
          .join(" • ");
        const descriptor = attributes ? `${item.name} (${attributes})` : item.name;
        const lineTotal = Number(item.cost || 0) * Number(item.Quantity || 0);
        return `${index + 1}. ${descriptor} x${item.Quantity} — ${formatCurrency(lineTotal)}`;
      })
      .join("\n");

    const contactLines = [
      `Customer Name: ${customerName.trim()}`,
      `Delivery Address: ${deliveryAddress.trim()}`
    ];

    const summaryLines = [
      `Subtotal: ${formatCurrency(subtotal)}`,
      `Delivery Fee: ${formatCurrency(deliveryFee)}`,
      `Total: ${formatCurrency(total)}`
    ].filter(Boolean);

    const message = [
      "Hello Graferd Farms team, I'd like to place an order via the web shop.",
      "",
      orderLines,
      "",
      contactLines.join("\n"),
      "",
      summaryLines.join("\n"),
      "",
      "Please confirm availability and delivery options. Thank you!"
    ]
      .filter((line) => line && line.trim().length > 0)
      .join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (!newWindow) {
      window.location.href = whatsappUrl;
    }
  };

  if (!Items.length) {
    return (
      <div className="my-4 px-4 xsm:px-6 md:px-8 max-w-6xl mx-auto w-full flex-col-reverse lg:flex-row flex items-center">
                <div className="text-center flex flex-col items-center gap-5">
          <h1 className="font-display text-4xl xsm:text-5xl">Your Cart is Empty!</h1>
          <p>Must add items on the card before you proceed to checkout</p>
          <div className="p-4"><Link className="bg-black text-white py-3 px-16 rounded-3xl w-fit" to='/Shop'>Go to Shop</Link></div>
        </div>

          <motion.div
            initial={{opacity:0, y:75}}
            animate={{opacity:1, y:0}} transition={{type:'just'}} 
            className="flex-grow relative w-full nav:w-fit">
              <Img src="undraw_shopping_app_flsj.png" alt="" img="Empty"/>
          </motion.div>
      </div>
    )
  } 
  return (
    <div className="my-4 px-4 xsm:px-6 md:px-8 max-w-6xl mx-auto w-full">
      
      <div className='flex my-5 items-center gap-4'>
        <Link to='/' className='text-gray-400'>Home</Link>
        <IoIosArrowForward color='gray'/>
        <p className=''>Cart</p>
      </div>
      <h1 className="font-display text-3xl xsm:text-4xl">Your Cart</h1>
      <div className="mt-10 flex flex-wrap gap-5">
        <motion.div key={Items.length} className="flex flex-grow-huge h-fit flex-col rounded-xl border-2 p-5">
            <AnimatePresence>
            {
              Items.map((item, index) => {
                return (
                  <AnimatePresence key={index} mode="wait">
                    <motion.div
                      initial={{height:'auto',opacity:0,y:0}}
                      animate={{height:'auto',opacity:1,y:10}}
                      exit={{height:0,opacity:0,y:-10}}
                      key="modal"
                      transition={{type:'just',delay:0.1*index}}
                        >
                      <CartLayout item={item} />
                      {index+1!==Items.length && <hr className="my-5"/>}
                    </motion.div>
                  </AnimatePresence>
                )
              })
            }
            </AnimatePresence>

        </motion.div>
        <motion.div
          
          initial={{opacity:0,y:10}}
          animate={{opacity:1,y:0}}
        className="p-5 rounded-xl border-2 flex-grow sm:min-w-[450px] h-fit">
          <h1 className="font-display mb-5 font-bold text-xl">Order Summary</h1>
          <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <div>Subtotal</div>
                <div className="font-display text-lg font-bold">{formatCurrency(subtotal)}</div>
              </div>
              <div className="flex justify-between">
                <div>Delivery Fee</div>
                <div className="font-display text-lg font-bold">{formatCurrency(deliveryFee)}</div>
              </div>
              <hr />
              <div className="flex justify-between">
                <div>Total</div>
                <div className="font-display text-lg font-bold">{formatCurrency(total)}</div>
              </div>
              <div className="grid gap-4">
                <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  <span>Full Name</span>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(event) => setCustomerName(event.target.value)}
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-800 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:focus:border-emerald-400 dark:focus:ring-emerald-500/30"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  <span>Delivery Address</span>
                  <textarea
                    value={deliveryAddress}
                    onChange={(event) => setDeliveryAddress(event.target.value)}
                    placeholder="Include street, city, and any delivery notes"
                    rows={3}
                    className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-800 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:focus:border-emerald-400 dark:focus:ring-emerald-500/30"
                  />
                </label>
                {formError && <p className="text-sm font-medium text-red-600 dark:text-red-400">{formError}</p>}
              </div>
              <div className="flex mt-5 mb-5">
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="bg-black text-white py-3 px-16 rounded-3xl flex-grow text-center transition hover:-translate-y-[1px]"
                >
                  Checkout on WhatsApp
                </button>
              </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
