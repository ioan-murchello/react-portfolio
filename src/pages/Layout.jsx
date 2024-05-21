import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import BigSidebar from '../components/BigSidebar';
import DownBar from '../components/DownBar';
import { useState } from 'react';
 

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(open => !open)
  return (
    <div className='container h-screen mx-auto pt-5 flex'>
      <aside>
        <BigSidebar />
      </aside>
      <div className=' w-full rounded-lg pt-2 pb-16 sm:pb-14 sm:py-5 px-4 sm:px-8 overflow-y-auto scrollbar-hide'>
        <Outlet />
      </div>
      <div className='hidden lg:flex items-start w-full max-w-[100px]'>
        <Sidebar />
      </div>
      <DownBar toggleOpen={isOpen} handleOpen={handleOpen} />
    </div>
  );
};
export default Layout;
