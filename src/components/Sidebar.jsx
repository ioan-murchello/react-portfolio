 
import { RxAvatar } from 'react-icons/rx';  

import { PiBookOpen } from 'react-icons/pi';
import { FiGrid } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation()
    const active = location.pathname
  return (
    <aside className='w-full flex flex-col gap-y-4 bg-gray-100 items-center py-4 rounded-lg'>
      <Link className=' rounded-lg flex justify-center items-center' to='/'>
        <RxAvatar
          className={`h-8 w-8 sm:h-10 sm:w-10 ${
            active === '/'
              ? 'text-blue-400'
              : 'text-gray-400 md:hover:scale-105'
          } `}
        />
      </Link>
      <Link
        className='rounded-lg flex justify-center items-center'
        to='/resume'
      >
        <PiBookOpen
          className={`h-8 w-8 sm:h-10 sm:w-10 ${
            active === '/resume'
              ? 'text-blue-400 '
              : 'text-gray-400 md:hover:scale-105'
          }`}
        />
      </Link>
      <Link className='rounded-lg flex justify-center items-center' to='/works'>
        <FiGrid
          className={`h-8 w-8 sm:h-10 sm:w-10 ${
            active === '/works'
              ? 'text-blue-400'
              : 'text-gray-400 md:hover:scale-105'
          } md:hover:scale-105`}
        />
      </Link>
      <Link
        className='rounded-lg flex justify-center items-center'
        to='/contakt'
      >
        <HiOutlineMail
          className={`h-8 w-8 sm:h-10 sm:w-10 ${
            active === '/contakt'
              ? 'text-blue-400'
              : 'text-gray-400 md:hover:scale-105'
          } md:hover:scale-105`}
        />
      </Link>
    </aside>
  );
};
export default Sidebar;
