import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

import { FaPaperPlane } from 'react-icons/fa';
import Title from '../components/Title'; 

const schema = yup.object({
  name: yup.string().min(3, 'Minimum 3 characters').required('Required'),
  email: yup.string().email('Email format is not valid').required('Required'),
  thema: yup.string().min(3, 'Minimum 3 characters'),
});

const Contakt = () => {
  const onSubmitForm = async (obj) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(obj),
      });
      if (res.status === 201) {
        toast.success('Thank you! I will contakt You soon');
      } else {
        toast.error('Ooops... Some error with server. Try later');
      }
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.section
      className='box'
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0,0,0,0],
        scale: {
          type: 'spring',
          damping: 7,
          stiffness: 200,
          restDelta: 0.000,
        },
      }}
    >
      <Title text='Contakt' />
      <Formik
        initialValues={{ name: '', email: '', business: '' }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          onSubmitForm(values);
          actions.resetForm();
        }}
      >
        {() => (
          <Form className='flex flex-col'>
            <div className='flex flex-col gap-y-3 pb-28'>
              <label htmlFor='name'>Name</label>
              <Field
                className='border focus:border-blue-400 shadow-md focus:outline-none active:border-blue-500 rounded-lg p-3'
                placeholder='Jhon Doe'
                name='name'
                type='text'
              />
              <ErrorMessage
                className='text-red-400'
                name='name'
                component='div'
              />
              <label htmlFor='email'>Email</label>
              <Field
                className='border focus:border-blue-400 shadow-md focus:outline-none active:border-blue-500  rounded-lg p-3'
                placeholder='jhondoe@gmail.com'
                name='email'
                type='email'
              />
              <ErrorMessage
                className='text-red-400'
                name='email'
                component='div'
              />
              <label htmlFor='work'>Business</label>

              <Field
                className='border focus:border-blue-400 shadow-md focus:outline-none active:border-blue-500 rounded-lg p-3'
                placeholder='I want hire you :)'
                name='business'
                type='text'
              />
              <ErrorMessage
                className='text-red-400'
                name='work'
                component='div'
              />
              <button
                className='w-full border shadow-lg mt-4 rounded-xl bg-gray-100 py-4 max-w-40 sm:max-w-60 flex justify-center items-center transition-transform duration-300 ease-in-out group hover:scale-95'
                type='submit'
              >
                <FaPaperPlane className='w-6 h-6 text-blue-400 transform transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12' />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </motion.section>
  );
};
export default Contakt;
