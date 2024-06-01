import Title from '../components/Title'; 
import ExternalLink from '../components/ExternalLink';
import {sites} from '../datas/datas.js'

const Works = () => {
  return (
    <section>
      <Title text='Projects' />
      <div className='grid gap-x-4 gap-y-5 rounded-xl border p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {sites.map(item => {
          const { image, url, name } = item;
          console.log(image)
          return (
            <ExternalLink
              to={url}
              className='shadow-custom-shadow transition-all duration-300 hover:scale-[0.99]'
            >
              <div className='bg-gray-100 flex flex-col relative p-4 h-full  rounded-lg'>
                <img
                  className='w-full h-48 object-cover'
                  src={image}
                  alt='foto'
                />
                <div className='bg-gray-600/70 text-white relative  p-4'>
                  <h2 className='text-md sm:text-xl'>{name}</h2>
                </div>
              </div>
            </ExternalLink>
          );
        })}
        
      </div>
    </section>
  );
};
export default Works;
