import { memo } from 'react';
 
const ServiceCard = memo(function ServiceCard({ title, text, icon: Icon, bgColor, iconColor }) {
  return (
    <article className={`flex flex-col gap-x-4 ${bgColor} rounded-lg p-5 transition-all`}>
      <Icon className={`w-10 h-10 flex-shrink-0 ${iconColor}`} />
      <div>
        <p className='font-medium text-xl'>{title}</p>
        <p className='text-md opacity-90'>{text}</p>
      </div>
    </article>
  );
});

export default ServiceCard;