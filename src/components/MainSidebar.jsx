
import avatar from '../img/portfolio_foto.jpg';
import { Link } from 'react-router-dom';

import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import { MdPhoneIphone } from 'react-icons/md';
import { MdAlternateEmail } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';


const MainSidebar = ({toggle}) => {
  return (
    <div
      className={`fixed ${
        toggle ? 'translate-y-0' : '-translate-y-full'
      } pt-6 flex flex-col justify-start items-center transition-transform duration-500 ease-in-out top-0 left-0 w-full h-full bg-white z-10`}
    >
      <div className='w-40 flex relative h-40 rounded-full mb-7 overflow-hidden shadow-lg'>
        <img
          className='w-full absolute object-cover'
          src={avatar}
          alt='avatar'
        />
      </div>
      <h2 className='text-2xl'>Murza Janos</h2>
      <p className='text-xl bg-gray-300 p-2 rounded-lg'>Fronted-Developer</p>
      <ul className='flex gap-x-4 mt-5'>
        <li>
          <Link to=''>
            <FaFacebook className='h-8 w-8 text-blue-500 hover:scale-105' />
          </Link>
        </li>
        <li>
          <Link to=''>
            <FaInstagram className='h-8 w-8 text-orange-500 hover:scale-105' />
          </Link>
        </li>
        <li>
          <Link to=''>
            <FaLinkedin className='h-8 w-8 text-blue-600 hover:scale-105' />
          </Link>
        </li>
        <li>
          <Link to=''>
            <FaGithub className='h-8 w-8 text-gray-600 hover:scale-105' />
          </Link>
        </li>
      </ul>

      <ul className='flex w-full gap-y-2 flex-col mt-10'>
        <li className='flex gap-x-2 gap-y-2 items-center justify-center  rounded-lg p-2 group'>
          <MdPhoneIphone className='h-8 w-8 text-red-400 transform transition-transform duration-300 group-hover:rotate-12' />
          <Link to='tel:+42044433322'>+42044433322</Link>
        </li>
        <li className='flex gap-x-2 gap-y-2 items-center justify-center  rounded-lg p-2 group'>
          <MdAlternateEmail className='h-8 w-8 text-green-400 transform transition-transform duration-300 group-hover:rotate-12' />
          <Link to='mailto:murzajanos@gmail.com'>murzajanos@gmail.com</Link>
        </li>
        <li className='flex gap-x-2 gap-y-2 items-center justify-center  rounded-lg p-2 group'>
          <MdLocationOn className='h-8 w-8 text-violet-400 transform transition-transform duration-300 group-hover:rotate-12' />
          <Link to=''>Prague</Link>
        </li>
      </ul>
    </div>
  );
}
export default MainSidebar