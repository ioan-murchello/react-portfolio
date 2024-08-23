import Title from '../components/Title'; 
import ExternalLink from '../components/ExternalLink';
import {sites} from '../datas/datas.js'
import { motion } from 'framer-motion'; 

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
  hidden: { opacity: 0,},
  show: { opacity: 1,},
};

const ELink = motion(ExternalLink)

const Works = () => {
  return (
    <section>
      <Title text='Projects' />
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='show'
        className='grid gap-x-4 gap-y-5 rounded-xl border p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '
      >
        {sites.map((item) => {
          const { image, url, name } = item;
          return (
            <ELink
              variants={itemVariants}
              key={name}
              to={url}
              className='shadow-custom-shadow group transition-all duration-300 md:hover:scale-[0.99] group rounded-lg'
            >
              <div className='bg-gray-100 transition-all duration-400 md:group-hover:bg-[#adadad] flex flex-col relative p-4 h-full  rounded-lg'>
                <img
                  className='w-full h-full object-cover'
                  src={image}
                  alt='foto'
                />
                <div className='bg-gray-600/70 text-white relative p-2'>
                  <h2 className='text-sm sm:text-md'>{name}</h2>
                </div>
              </div>
            </ELink>
          );
        })}
      </motion.div>
    </section>
  );
};
export default Works;
