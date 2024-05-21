import { RxAvatar } from 'react-icons/rx';
import { PiBookOpen } from 'react-icons/pi';
import { BsPersonWorkspace } from 'react-icons/bs';
import { GrContact } from 'react-icons/gr';
import { RiMenuAddLine } from 'react-icons/ri';

import { Link, useLocation } from 'react-router-dom';

const DownBar = ({ toggleOpen, handleOpen }) => {
  const location = useLocation();
  const active = location.pathname;

   const handleClick = (event) => {
     if (toggleOpen) {
       event.preventDefault();
     }
   };
  
  return (
    <div className='fixed max-w-[300px] w-full min-w-[260px]  p-2 mx-auto left-0 right-0 bottom-2 grid grid-cols-5 lg:hidden gap-x-3 bg-slate-500 items-center justify-center rounded-lg'>
      <Link
        className='bg-gray-600 shadow shadow-white rounded-lg flex justify-center items-center p-3'
        to='/'
        onClick={handleClick}
      >
        <RxAvatar
          className={`h-6 w-6 sm:h-8 sm:w-8 ${
            active === '/' ? 'text-blue-400' : 'text-white'
          }`}
        />
      </Link>
      <Link
        onClick={handleClick}
        className='bg-gray-600 shadow shadow-white rounded-lg flex justify-center items-center p-3'
        to='/resume'
      >
        <PiBookOpen
          className={`h-6 w-6 sm:h-8 sm:w-8 ${
            active === '/resume' ? 'text-blue-400' : 'text-white'
          }`}
        />
      </Link>
      <Link
        onClick={handleClick}
        className='bg-gray-600 shadow shadow-white rounded-lg flex justify-center items-center p-3'
        to='/works'
      >
        <BsPersonWorkspace
          className={`h-6 w-6 sm:h-8 sm:w-8 ${
            active === '/works' ? 'text-blue-400' : 'text-white'
          }`}
        />
      </Link>
      <Link
        onClick={handleClick}
        className='bg-gray-600 shadow shadow-white rounded-lg flex justify-center items-center p-3'
        to='/contakt'
      >
        <GrContact
          className={`h-6 w-6 sm:h-8 sm:w-8 ${
            active === '/contakt' ? 'text-blue-400' : 'text-white'
          }`}
        />
      </Link>
      <button
        className='bg-gray-600 shadow shadow-white rounded-lg flex justify-center items-center p-3'
        onClick={handleOpen}
      >
        <RiMenuAddLine
          className={`h-6 w-6 sm:h-8 sm:w-8 ${
            toggleOpen ? 'text-orange-500' : 'text-white'
          }`}
        />
      </button>
    </div>
  );
};
export default DownBar;
