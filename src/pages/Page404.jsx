import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import Img from "../components/Img"
export default function Page404() {
  return (
    <div className="my-4 px-4 xsm:px-6 md:px-8 max-w-6xl mx-auto w-full flex-col-reverse lg:flex-row flex items-center">
    <div className="text-center flex flex-col items-center gap-5">
      <h1 className="bolded text-4xl xsm:text-5xl">Somthing went wrong</h1>
      <p>We cant seem to find page you are looking for</p>
      <div className="p-4"><Link className="bg-black text-white py-3 px-16 rounded-3xl w-fit" to='/'>Back to home</Link></div>
    </div>
      <motion.div

        initial={{opacity:0, y:75}}
        animate={{opacity:1, y:0}} transition={{type:'just'}} 
        className="flex-grow relative w-full nav:w-fit">
          <Img  src="../Undraw404.png" alt="" img="Error" />
      </motion.div>
  </div>
  )
}
