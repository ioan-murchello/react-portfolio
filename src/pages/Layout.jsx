import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import BigSidebar from '../components/BigSidebar';
import DownBar from '../components/DownBar';
import MainSidebar from '../components/MainSidebar';
import { useState } from 'react';
 

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  window.addEventListener('resize', () => setIsOpen(false))

  // const handleOpen = () => setIsOpen(open => !open)
  return (
    <div className='container h-screen mx-auto pt-5 flex'>
        <MainSidebar   toggle={isOpen}/>
      <aside> 
        <BigSidebar handleOpen={isOpen}  />
      </aside>
      <div className=' w-full rounded-lg pt-2 pb-16 sm:pb-14 sm:py-5 px-4 sm:px-8 overflow-y-auto scrollbar-hide'>
        <Outlet />
      </div>
      <div className='hidden lg:flex items-start w-full max-w-[100px]'>
        <Sidebar />
      </div>
      <DownBar toggleOpen={isOpen} handleOpen={setIsOpen} />
    </div>
  );
};
export default Layout;
