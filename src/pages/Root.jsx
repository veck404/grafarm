import SideNavContext from '../store/SideNavContext'
import CartContext from '../store/CartContext'
import Navbar from '../components/Navbar'
// import TopHeader from '../components/TopHeader'
import SideNav from '../components/SideNav'
import LayoutHolder from '../components/LayoutHolder'


export default function Root() {
  return (
    <div className='min-h-screen bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100'>
      <SideNavContext>
        <CartContext>
          {/* <TopHeader/> */}
          <Navbar/>

          <LayoutHolder type='Outlet'/>

          <SideNav/>
        </CartContext>
      </SideNavContext>
    </div>
  )
}
