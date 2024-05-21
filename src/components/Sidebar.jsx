 
import { RxAvatar } from 'react-icons/rx'; 

import { BsPersonWorkspace } from 'react-icons/bs'; 
import { GrContact } from 'react-icons/gr';

import { PiBookOpen } from 'react-icons/pi';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation()
    const active = location.pathname
  return (
    <aside className='w-full flex flex-col gap-y-5 bg-gray-100 items-center py-6 rounded-lg'>
      <Link
        className='bg-gray-200 rounded-lg flex justify-center items-center p-3'
        to='/'
      >
        <RxAvatar
          className={`h-8 w-8 sm:h-10 sm:w-10 ${
            active === '/' ? 'text-blue-400' : 'text-gray-400'
          }`}
        />
      </Link>
      <Link
        className='bg-gray-200 rounded-lg flex justify-center items-center p-3'
        to='/resume'
      >
        <PiBookOpen
          className={`h-8 w-8 sm:h-10 sm:w-10 ${
            active === '/resume' ? 'text-blue-400' : 'text-gray-400'
          }`}
        />
      </Link>
      <Link
        className='bg-gray-200 rounded-lg flex justify-center items-center p-3'
        to='/works'
      >
        <BsPersonWorkspace
          className={`h-8 w-8 sm:h-10 sm:w-10 ${
            active === '/works' ? 'text-blue-400' : 'text-gray-400'
          }`}
        />
      </Link>
      <Link
        className='bg-gray-200 rounded-lg flex justify-center items-center p-3'
        to='/contakt'
      >
        <GrContact
          className={`h-8 w-8 sm:h-10 sm:w-10 ${
            active === '/contakt' ? 'text-blue-400' : 'text-gray-400'
          }`}
        />
      </Link>
    </aside>
  );
};
export default Sidebar;
