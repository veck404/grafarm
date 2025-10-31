import { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { Products } from '../store/Constants'
import Page404 from './Page404'
import RateCost from '../components/RateCost'
import {motion} from "framer-motion"
import { useCartActions } from '../store/useCartActions'
import HomeSliders from '../components/HomeSliders'
import { IoIosArrowForward } from "react-icons/io";
import Img from '../components/Img'

export default function Prodcut() {
  const [MyProdcut, setMyProdcut] = useState({})
  const { addItem } = useCartActions()
    const [Color] = useState('')

  const [Size, setSize] = useState('Any')
  const [Quantity, setQuantity] = useState(1)
  const { name } = useParams()
  
  useEffect(()=>{
    window.scrollTo(0,0)
    const test = name.replace(/[^a-zA-Z]/g, '').toLowerCase();
        const Filtered = Products.filter(e=> e.place==='shop')

    const item = Filtered.find(e=> e.name.replace(/[^a-zA-Z]/g, '').toLowerCase() === test)
    setMyProdcut(item);
  },[name])

  const handleSubmit = ()=>{
    const color = Color===1?'Yellow':Color===2?'Red':Color===3?'Green':Color===4?'Blue':Color===5?'Light Yellow':Color===6?'Light Red':Color===7?'Light Green':Color===8?'Light Blue':'Any'
    const size = Size;
    addItem({ ...MyProdcut, color, size }, Quantity)
  }

  
  const handleSizeChanges = (el)=>{
    if(el===Size){
      return ()=>setSize('')
    }
    return ()=>setSize(el)
  }



  const handleQuantityChange = (num)=>{
    return ()=>{
      if(num===-1 && Quantity===1){
        return
      }
      setQuantity(Quantity+num)
    }
  }


  if(!MyProdcut){
    return <Page404/>
  }

  return (
    <>
      <div className='flex my-5 items-center gap-4 px-4 xsm:px-6 md:px-8 max-w-6xl mx-auto w-full'>
        <Link to='/' className='text-gray-400'>Home</Link>
        <IoIosArrowForward color='gray'/>
        <Link to='/Shop' className='text-gray-400'>Shop</Link>
        <IoIosArrowForward color='gray'/>
        <p className=''>{MyProdcut.name}</p>
      </div>
      <div className='flex flex-wrap justify-center gap-x-10 px-4 xsm:px-6 md:px-8 max-w-6xl mx-auto w-full h-fit'>
                <div className='bg-gray-100 dark:bg-neutral-800 flex-grow rounded-xl flex justify-center '>
          <Img className='w-[80%] aspect-square object-contain' src={MyProdcut.src} alt='' />
        </div>
        <div className='relative w-[100%-40px]'>
                    <RateCost from='Prodcut' name={MyProdcut.name} cost={MyProdcut.cost} discount={MyProdcut.discount} />
          <div>
            {/* <div className='mt-10'></div>
            <hr />
                        <div className='absolute -translate-y-4 right-10 bg-white dark:bg-neutral-900'>Select Options</div>
                        <div className='flex flex-wrap gap-3 items-end h-24'>
              <motion.div 
                initial={{opacity:0,x:-75}}
                animate={{opacity:1,x:0}}
                transition={{delay:0}}
              className='bg-yellow-500/30 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full'>Rich Color</motion.div>
              <motion.div 
                initial={{opacity:0,x:-75}}
                animate={{opacity:1,x:0}}
                transition={{delay:0.1}}
              className='bg-red-500/30 text-red-800 dark:text-red-200 px-4 py-2 rounded-full'>Pure Taste</motion.div>
              <motion.div 
                initial={{opacity:0,x:-75}}
                animate={{opacity:1,x:0}}
                transition={{delay:0.2}}
              className='bg-green-500/30 text-green-800 dark:text-green-200 px-4 py-2 rounded-full'>Organic</motion.div>
            </div> */}

            <div className='mt-10'></div>
            <hr />
            <div className='absolute -translate-y-4 right-10 bg-white dark:bg-neutral-900'>Choose Container</div>
            <div className='flex flex-wrap gap-4 mt-10'>
              <motion.div 
                initial={{opacity:0,x:-75}}
                animate={{opacity:1,x:0}}
                transition={{delay:0}} onClick={handleSizeChanges('10L')} 
              className={`${Size==='10L'?'bg-black text-white':'bg-gray-100 dark:bg-neutral-800'} cursor-pointer py-2 px-5 rounded-full `}>Yello</motion.div>
              <motion.div 
                initial={{opacity:0,x:-75}}
                animate={{opacity:1,x:0}}
                transition={{delay:0.1}} onClick={handleSizeChanges('25L')} 
              className={`${Size==='25L'?'bg-black text-white':'bg-gray-100 dark:bg-neutral-800'} cursor-pointer py-2 px-5 rounded-full `}>Transparent</motion.div>
              <motion.div 
                initial={{opacity:0,x:-75}}
                animate={{opacity:1,x:0}}
                transition={{delay:0.2}} onClick={handleSizeChanges('50L')} 
              className={`${Size==='50L'?'bg-black text-white':'bg-gray-100 dark:bg-neutral-800'} cursor-pointer py-2 px-5 rounded-full `}>Black</motion.div>
            </div>

            
            <div className='mt-10'></div>
            <hr />
            <div className='flex flex-col xsm:flex-row flex-wrap mt-10 gap-10'>
              <motion.div
                initial={{opacity:0,x:-75}}
                animate={{opacity:1,x:0}}
                transition={{delay:0.3}}
              className='rounded-full select-none	 flex-grow xsm:flex-grow-0 p-3 xsm:p-0 xsm:w-[25%] flex justify-center items-center gap-5 bg-gray-100'>
                <span onClick={handleQuantityChange(-1)} className='text-4xl -mt-1 cursor-pointer flex-grow text-center'>-</span>
                <span className='font-bold'>{Quantity}</span>
                <span onClick={handleQuantityChange(1)} className='text-4xl -mt-1 cursor-pointer flex-grow text-center'>+</span>
              </motion.div>
              <motion.div
                initial={{opacity:0,x:-75}}
                animate={{opacity:1,x:0}}
                transition={{delay:0.3}}
                className='flex-grow'
              >
                <button onClick={handleSubmit} className='bg-black w-full text-white px-5 py-4 rounded-full flex-grow'>Add to Cart</button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <HomeSliders text='You might also like' type={MyProdcut.type} del='yes' id={MyProdcut.id} />
    </>
  )
}
