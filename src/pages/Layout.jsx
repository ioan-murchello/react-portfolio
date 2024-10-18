import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import BigSidebar from '../components/BigSidebar';
import DownBar from '../components/DownBar';
import MainSidebar from '../components/MainSidebar';
import { useState } from 'react';
import SpaceBackground from '../components/SpaceBackground';
 

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  window.addEventListener('resize', () => setIsOpen(false)) 

  return (
    <div className='container h-screen mx-auto flex'>
      {/* <SpaceBackground/> */}
        <MainSidebar   toggle={isOpen}/>
      <aside className='pt-2'> 
        <BigSidebar handleOpen={isOpen}  />
      </aside>
      <div className=' w-full rounded-lg pt-2 pb-16 sm:pb-2 sm:py-5 px-4 sm:px-8 overflow-y-auto scrollbar-hide'>
        <Outlet />
      </div>
      <div className='hidden pt-5 lg:flex items-start w-full max-w-16'>
        <Sidebar />
      </div>
      <DownBar toggleOpen={isOpen} handleOpen={setIsOpen} />
    </div>
  );
};
export default Layout;
