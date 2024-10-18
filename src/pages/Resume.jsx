import Title from '../components/Title';
import { icons } from '../datas/icons';

import { MdOutlineCastForEducation } from 'react-icons/md';
import { RiRoadMapFill } from 'react-icons/ri';
import { RiRadioButtonLine } from 'react-icons/ri';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { BiSolidCabinet } from 'react-icons/bi'; 
import { RxAvatar } from 'react-icons/rx';

import { motion } from 'framer-motion';

const MotionTitle = motion(Title);

const staggerContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1, // Controls the delay between each child's animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const Resume = () => {
  return (
    <motion.section variants={staggerContainer} initial='hidden' animate='show'>
      <MotionTitle variants={itemVariants} text='resume' />
      <motion.div
        variants={itemVariants}
        className='flex mb-12 flex-col gap-y-4 my-5'
      >
        <div className='flex gap-x-4'>
          <BiSolidCabinet className='h-8 w-8 text-purple-500' />
          <h2 className='text-2xl font-medium capitalize'>
            Skills (Technical Level)
          </h2>
        </div>
        <motion.ul
          variants={staggerContainer}
          initial='hidden'
          animate='show'
          className='flex my-8 flex-wrap gap-4 justify-evenly'
        >
          {icons.map(icon => {
            const IconComponent = icon.icon
            return (
              <motion.li key={icon.id} variants={itemVariants}>
                <IconComponent
                  className={`h-14 w-14 sm:w-16 sm:h-16 ${icon.color}  `}
                />
              </motion.li>
            );
          })} 
        </motion.ul>
      </motion.div>

      <motion.div
        className='flex mb-12 flex-col gap-y-4 my-5'
        variants={itemVariants}
      >
        <motion.div className='flex gap-x-4 my-5'>
          <MdOutlineCastForEducation className='h-8 w-8 text-green-500' />
          <motion.h2
            variants={itemVariants}
            className='text-2xl font-medium capitalize'
          >
            Education
          </motion.h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className='bg-black/80 rounded-xl p-4 '
        >
          <p className='text-xl font-medium text-white capitalize'>
            Step IT Academy
          </p>
          <div className='flex items-center gap-x-4 mt-2'>
            <RiRoadMapFill className='h-6 w-6 text-yellow-300' />
            <p className='text-xl text-green-400 capitalize'>Praha 1, 110 00</p>
          </div>
        </motion.div>
      </motion.div>

      <div className='flex mb-12 flex-col gap-y-4 my-5'>
        <motion.div variants={itemVariants} className='flex gap-x-4 mt-10'>
          <RiRadioButtonLine className='h-8 w-8 text-rose-500' />
          <h2 className='text-2xl font-medium capitalize'>Online Courses</h2>
        </motion.div>

        <ul>
          <motion.li
            variants={itemVariants}
            className='bg-black/80 rounded-xl p-4 my-5 flex flex-col'
          >
            <p className='text-xl font-medium text-white capitalize'>
              Complete course on JavaScript + React - from scratch to results
            </p>
            <div className='flex items-center gap-x-4 mt-2'>
              <RxAvatar className='h-6 w-6 text-orange-400' />
              <p className='text-xl text-green-400 capitalize'>
                Ivan Petrichenko
              </p>
            </div>
            <div className='flex items-center gap-x-4 mt-2'>
              <HiOutlineComputerDesktop className='h-6 w-6 text-purple-500' />
              <p className='text-xl text-purple-400 capitalize'>Udemy</p>
            </div>
          </motion.li>
          <motion.li
            variants={itemVariants}
            className='bg-black/80 rounded-xl p-4 my-5 flex flex-col'
          >
            <p className='text-xl font-medium text-white capitalize'>
              Hands-on React: Create 25+ Projects. Includes Axios, Router 6,
              Query 5, Redux Toolkit
            </p>
            <div className='flex items-center gap-x-4 mt-2'>
              <RxAvatar className='h-6 w-6 text-orange-400' />
              <p className='text-xl text-green-400 capitalize'>John Smilga</p>
            </div>
            <div className='flex items-center gap-x-4 mt-2'>
              <HiOutlineComputerDesktop className='h-6 w-6 text-purple-500' />
              <p className='text-xl text-purple-400 capitalize'>Udemy</p>
            </div>
          </motion.li>
          <motion.li
            variants={itemVariants}
            className='bg-black/80 rounded-xl p-4 my-5 flex flex-col'
          >
            <p className='text-xl font-medium text-white capitalize'>
              Dive in and learn React.js from scratch! Learn React, Hooks,
              Redux, React Router, Next.js, Best Practices and way more!
            </p>
            <div className='flex items-center gap-x-4 mt-2'>
              <RxAvatar className='h-6 w-6 text-orange-400' />
              <p className='text-xl text-green-400 capitalize'>
                Maximilian Schwarzmüller
              </p>
            </div>
            <div className='flex items-center gap-x-4 mt-2'>
              <HiOutlineComputerDesktop className='h-6 w-6 text-purple-500' />
              <p className='text-xl text-purple-400 capitalize'>Udemy</p>
            </div>
          </motion.li>
          <motion.li
            variants={itemVariants}
            className='bg-black/80 rounded-xl p-4 my-5 flex flex-col'
          >
            <p className='text-xl font-medium text-white capitalize'>
              Practical JavaScript (Advanced)
            </p>
            <div className='flex items-center gap-x-4 mt-2'>
              <RxAvatar className='h-6 w-6 text-orange-400' />
              <p className='text-xl text-green-400 capitalize'>
                Ivan Petrichenko
              </p>
            </div>
            <div className='flex items-center gap-x-4 mt-2'>
              <HiOutlineComputerDesktop className='h-6 w-6 text-purple-500' />
              <p className='text-xl text-purple-400 capitalize'>Udemy</p>
            </div>
          </motion.li>
          <motion.li
            variants={itemVariants}
            className='bg-black/80 rounded-xl p-4 my-5 flex flex-col'
          >
            <p className='text-xl font-medium text-white capitalize'>
              Modern JavaScript + Vue from scratch on real projects.
            </p>
            <div className='flex items-center gap-x-4 mt-2'>
              <RxAvatar className='h-6 w-6 text-orange-400' />
              <p className='text-xl text-green-400 capitalize'>
                Denys Mescheryakov
              </p>
            </div>
            <div className='flex items-center gap-x-4 mt-2'>
              <HiOutlineComputerDesktop className='h-6 w-6 text-purple-500' />
              <p className='text-xl text-purple-400 capitalize'>Udemy</p>
            </div>
          </motion.li>
        </ul>
      </div>
    </motion.section>
  );
};
export default Resume;
