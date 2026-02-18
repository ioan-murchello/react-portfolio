<<<<<<< HEAD
import Title from '../components/Title';
import { icons } from '../datas/icons'; 
import { BiSolidCabinet } from 'react-icons/bi';  

import { motion } from 'framer-motion';
=======
import Title from "../components/Title";
import { icons } from "../datas/icons";
import { BiSolidCabinet } from "react-icons/bi";

import { motion } from "framer-motion";
>>>>>>> 7118bde (added new iconst to resume section)

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
<<<<<<< HEAD
    <motion.section variants={staggerContainer} initial='hidden' animate='show'>
      <MotionTitle variants={itemVariants} text='resume' />
      <motion.div
        variants={itemVariants}
        className='flex mb-12 flex-col gap-y-4 my-5'
      >
        <div className='flex gap-x-4'>
          <BiSolidCabinet className='h-8 w-8 text-purple-500' />
          <h2 className='text-2xl font-medium capitalize'>
=======
    <motion.section variants={staggerContainer} initial="hidden" animate="show">
      <MotionTitle variants={itemVariants} text="resume" />
      <motion.div
        variants={itemVariants}
        className="flex mb-12 flex-col gap-y-4 my-5"
      >
        <div className="flex gap-x-4">
          <BiSolidCabinet className="h-8 w-8 text-purple-500" />
          <h2 className="text-2xl font-medium capitalize">
>>>>>>> 7118bde (added new iconst to resume section)
            Skills (Technical Level)
          </h2>
        </div>
        <motion.ul
          variants={staggerContainer}
<<<<<<< HEAD
          initial='hidden'
          animate='show'
          className='flex my-8 flex-wrap gap-8 gap-y-16 justify-evenly'
        >
          {icons.map(icon => {
            const IconComponent = icon.icon
            return (
              <motion.li className='flex flex-col items-center justify-center gap-y-4' key={icon.id} variants={itemVariants}>
                <IconComponent
                  className={`h-14 w-14 sm:w-16 sm:h-16 ${icon.color}  `}
                />
                <p>{icon.title}</p>
              </motion.li>
            );
          })} 
        </motion.ul>
      </motion.div>

=======
          initial="hidden"
          animate="show"
          className="flex my-8 flex-wrap gap-8 gap-y-16 justify-evenly"
        >
          {icons.map((icon) => {
            const IconComponent = icon.icon;
            const isImage = typeof icon.icon === "string";
            return (
              <motion.li
                className="flex flex-col items-center justify-center gap-y-4"
                key={icon.id}
                variants={itemVariants}
              >
                {isImage ? ( 
                  <img
                    src={icon.icon}
                    alt={icon.title}
                    className="h-14 w-14 sm:w-16 sm:h-16 object-contain fill-[#68492a]"
                  />
                ) : ( 
                  <IconComponent
                    className={`h-14 w-14 sm:w-16 sm:h-16 ${icon.color}`}
                  />
                )}
                <p>{icon.title}</p>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
>>>>>>> 7118bde (added new iconst to resume section)
    </motion.section>
  );
};
export default Resume;
