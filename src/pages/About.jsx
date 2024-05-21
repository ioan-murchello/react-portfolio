import Title from '../components/Title';

import { AiOutlinePicture } from 'react-icons/ai';
import { AiOutlineIdcard } from 'react-icons/ai';
import { AiFillSignature } from 'react-icons/ai';
import { AiOutlineFileDone } from 'react-icons/ai';



import { motion } from 'framer-motion';

const MotionTitle = motion(Title);

 
const staggerContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3, // Controls the delay between each child's animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial='hidden'
      animate='show' 
    >
      <MotionTitle variants={itemVariants} text='about' />
      <div className='flex flex-col gap-y-5 my-5'>
        <motion.h2 variants={itemVariants} className='text-2xl font-medium'>
          Hi There!
        </motion.h2>
        <motion.p variants={itemVariants} className='text-xl'>
          As a Frontend Developer, I specialize in creating responsive and
          visually appealing web interfaces. With expertise in HTML, CSS, and
          JavaScript, I build dynamic and user-friendly websites that offer
          seamless experiences across all devices. My goal is to turn complex
          designs into functional, interactive, and engaging websites that meet
          the highest standards of performance and accessibility.
        </motion.p>
      </div>
      <motion.h2 variants={itemVariants} className='text-2xl font-medium'>
        What I Do
      </motion.h2>
      <motion.div
        variants={itemVariants}
        className='grid gap-5 grid-cols-1 md:grid-cols-2 my-5 '
      >
        <article className='grid sm:grid-cols-8 gap-x-5 bg-purple-200 rounded-lg p-5'>
          <AiOutlinePicture className='col-span-1 w-10 h-10 text-purple-500' />
          <div className='col-span-7'>
            <p className='font-medium text-xl'>Landing Pages</p>
            <p>
              Our landing page is designed to captivate visitors with a clean
              and engaging layout. It highlights key features, benefits, and
              calls to action, guiding users towards their desired goals with
              ease. With a focus on user experience, the page is optimized for
              quick loading times and responsiveness across all devices,
              ensuring an optimal first impression.
            </p>
          </div>
        </article>
        <article className='grid sm:grid-cols-8 gap-x-5 bg-blue-200/50 rounded-lg p-5'>
          <AiOutlineIdcard className='col-span-1 w-10 h-10 text-blue-600' />
          <div className='col-span-7'>
            <p className='font-medium text-xl'>Portfolio Websites</p>
            <p>
              A portfolio website is a personal online showcase of your work and
              skills. It's designed to present your projects, achievements, and
              professional experience in a visually appealing and organized
              manner. Ideal for artists, designers, developers, and other
              creatives, a portfolio website highlights your best work and
              serves as a digital resume to attract potential clients,
              employers, or collaborators.
            </p>
          </div>
        </article>
        <article className='grid sm:grid-cols-8 gap-x-5 bg-green-200 rounded-lg p-5'>
          <AiFillSignature className='col-span-1 w-10 h-10 text-green-500' />
          <div className='col-span-7'>
            <p className='font-medium text-xl'>Resume Websites</p>
            <p>
              A resume website is a personal online platform that presents your
              professional background, skills, and achievements. Unlike a
              traditional resume, it allows for a more dynamic and interactive
              presentation, including multimedia elements such as images,
              videos, and links to your work. This digital format enhances your
              visibility to potential employers and clients, offering an easily
              accessible and comprehensive view of your qualifications and
              career journey.
            </p>
          </div>
        </article>
        <article className='grid sm:grid-cols-8 gap-x-5 bg-red-200/50 rounded-lg p-5'>
          <AiOutlineFileDone className='col-span-1 w-10 h-10 text-red-500' />
          <div className='col-span-7'>
            <p className='font-medium text-xl'>Business Websites</p>
            <p>
              A business website is an online presence for a company, designed
              to provide information about its products, services, and values.
              It serves as a digital storefront, offering visitors insights into
              the company's offerings, contact details, and customer support. A
              well-designed business website enhances credibility, facilitates
              customer engagement, and drives sales by showcasing the brand and
              its unique value proposition.
            </p>
          </div>
        </article>
      </motion.div>
    </motion.section>
  );
};
export default About;
