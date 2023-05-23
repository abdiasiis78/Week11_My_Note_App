import React from 'react';

// Import Formik and Yup
import { Formik, Form, Field , ErrorMessage} from 'formik';
import * as Yup from 'yup'
const AddNote = (props) => {
 
  // add form logic here
    const initialValues = {
       title:'',
        content: ''

    }

    const handleSubmit = (values) =>{
       props.createNote({
        title: values.title,
        content: values.content
       })
    }

    const validationSchema = Yup.object({
      title: Yup.string().required('Required'),
      content: Yup.string().required('Required')
    })

  return (
    <div className="mx-auto rounded-lg bg-white p-10 shadow md:w-3/4 lg:w-1/2">
      { /* Add here your form and style it with Tailwind */ }
      <div  >
      <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={handleSubmit}
      >
        <Form  className='flex flex-col '>
          <div className="mb-5">
             <Field
               type='text'
               id = 'title'
               name = 'title'
               placeholder='Title'
               className="w-full rounded border border-yelow-300 p-3 shadow "
               />
               <ErrorMessage
                name="title"
                component="div"
                className="text-red-500"
              />
         </div>

          <div className="mb-5">
             <Field
               type='text'
               id = 'content'
               name = 'content'
               placeholder='content'
               className="w-full rounded border border-gray-300 p-5 shadow"
               />

             <ErrorMessage
                name="content"
                component="div"
                className="text-red-500"
              />
               
         </div>

               <button type='submit' className='bg-yellow-400 p-3 rounded-2xl text-black font-bold hover:bg-blue-600 hover:text-yellow-400'>Add Note</button>

        </Form>
      </Formik>
      </div>
    </div>
  );
};

export default AddNote;
