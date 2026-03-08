import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { servicesData } from '../datas/cardData';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ServicesList = () => {
  return (
    <motion.div
      variants={itemVariants}
      className='grid gap-5 grid-cols-1 md:grid-cols-2 my-5'
    >
      {servicesData.map((service) => (
        <ServiceCard
          key={service.id} 
          {...service} 
        />
      ))}
    </motion.div>
  );
};

export default ServicesList;