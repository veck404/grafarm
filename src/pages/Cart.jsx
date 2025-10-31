import { useContext, useState, useRef, useEffect } from "react"
import CartLayout from "../components/CartLayout"
import { Link } from "react-router-dom"
import { CartCtx } from "../store/CartContext"
import { MdOutlineDiscount } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import { IoIosArrowForward } from "react-icons/io";
import Img from "../components/Img"

const WHATSAPP_NUMBER = "2347017567105";

export default function Cart() {
  const { Cost, Items } = useContext(CartCtx);
  const [Discount, setDiscount] = useState(0);
  const [CorrectDiscount, setCorrectDiscount] = useState("Yet");
  const DiscountRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handlePromoCode = (e) => {
    e.preventDefault();
    if (DiscountRef.current.value === "Moemen") {
      setDiscount(20)
      setCorrectDiscount(true)
    } else if (DiscountRef.current.value === "MeMo") {
      setDiscount(100)
      setCorrectDiscount(true)
    } else {
      setDiscount(0)
      setCorrectDiscount(false)
    }
  }

  const subtotal = Number(Cost || 0);
  const formatCurrency = (amount) => `₦${Number(amount ?? 0).toLocaleString("en-NG")}`;
  const deliveryFee = 15;
  const discountAmount = (subtotal * Discount) / 100;
  const total = deliveryFee + subtotal - discountAmount;

  const handleCheckout = () => {
    if (!Items.length) {
      return;
    }

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

    const summaryLines = [
      `Subtotal: ${formatCurrency(subtotal)}`,
      Discount ? `Discount: ${Discount}% (-${formatCurrency(discountAmount)})` : null,
      `Delivery Fee: ${formatCurrency(deliveryFee)}`,
      `Total: ${formatCurrency(total)}`
    ].filter(Boolean);

    const message = [
      "Hello Graferd Farms team, I'd like to place an order via the web shop.",
      "",
      orderLines,
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
          <h1 className="bolded text-4xl xsm:text-5xl">Your Cart is Empty!</h1>
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
      <h1 className="bolded text-3xl xsm:text-4xl">Your Cart</h1>
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
          <h1 className="mb-5 font-bold text-xl">Order Summary</h1>
          <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <div>Subtotal</div>
                <div className="text-lg font-bold">{formatCurrency(subtotal)}</div>
              </div>
              <div className="flex justify-between">
                <div>Discount (-{Discount}%)</div>
                <div className="text-lg font-bold text-red-600">-{formatCurrency(discountAmount)}</div>
              </div>
              <div className="flex justify-between">
                <div>Delivery Fee</div>
                <div className="text-lg font-bold">{formatCurrency(deliveryFee)}</div>
              </div>
              <hr />
              <div className="flex justify-between">
                <div>Total</div>
                <div className="text-lg font-bold">{formatCurrency(total)}</div>
              </div>
              <div>
                <div title="Moemen" className="absolute translate-y-4 translate-x-4"><MdOutlineDiscount size={20}/></div>
                <form onSubmit={handlePromoCode} className="flex flex-wrap gap-5">
                  <input ref={DiscountRef} className="flex-grow bg-gray-100 rounded-full py-3 pl-10 outline-none" placeholder="Add promo code" type="text" />
                  <button className="bg-black text-white py-3 px-16 rounded-3xl text-center sm:flex-grow-0 flex-grow" type="submit">Apply</button>
                </form>
                {CorrectDiscount===false && <p className="font-bold mt-5 text-center text-red-600">Wrong promo code please try again!</p>}
                {CorrectDiscount==='Yet' && <p className="font-bold mt-5 text-center">Use promo code Moemen for 20% discount</p>}
                {CorrectDiscount===true && <p className="font-bold mt-5 text-center text-green-600">Promo code applied successfully</p>}
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
