import { RxAvatar } from 'react-icons/rx';
import { PiBookOpen } from 'react-icons/pi';
import { BsPersonWorkspace } from 'react-icons/bs'; 
import { RiMenuAddLine } from 'react-icons/ri'; 
import { HiOutlineMail } from 'react-icons/hi';
import { FiGrid } from 'react-icons/fi';




import { Link, useLocation } from 'react-router-dom';

const DownBar = ({ toggleOpen, handleOpen }) => {
  const location = useLocation();
  const active = location.pathname;

   const handleClick = () => {
      handleOpen(false)
   };
   const handleSetOpen = () => handleOpen((prev) => !prev);
  
  return (
    <div className='fixed max-w-[300px] glass-effect w-full min-w-[260px]  p-2 mx-auto left-0 right-0 bottom-2 grid grid-cols-5 lg:hidden gap-x-3 bg-gray-200 items-center justify-center rounded-lg z-20'>
      <Link
        className='flex justify-center items-center'
        to='/'
        onClick={handleClick}
      >
        <RxAvatar
          className={`h-10 w-10 ${
            active === '/' ? 'text-green-500' : 'text-black'
          }`}
        />
      </Link>
      <Link
        onClick={handleClick}
        className='flex justify-center items-center'
        to='/resume'
      >
        <PiBookOpen
          className={`h-10 w-10 ${
            active === '/resume' ? 'text-green-500' : 'text-black'
          }`}
        />
      </Link>
      <Link
        onClick={handleClick}
        className='flex justify-center items-center'
        to='/works'
      >
        <FiGrid
          className={`h-10 w-10 ${
            active === '/works' ? 'text-green-500' : 'text-black'
          }`}
        />
      </Link>
      <Link
        onClick={handleClick}
        className='flex justify-center items-center'
        to='/contakt'
      >
        <HiOutlineMail
          className={`h-10 w-10 ${
            active === '/contakt' ? 'text-green-500' : 'text-black'
          }`}
        />
      </Link>
      <button
        className='flex justify-center items-center'
        onClick={handleSetOpen}
      >
        <RiMenuAddLine
          className={`h-10 w-10 ${
            toggleOpen ? 'text-orange-500' : 'text-black'
          }`}
        />
      </button>
    </div>
  );
};
export default DownBar;
