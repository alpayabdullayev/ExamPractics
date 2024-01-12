import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddPage = () => {
    async function createPoruct(values) {
        try {
            const res = await axios.post("http://localhost:8000/api/products/", values)

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <section className='py-20'>
            <div className="wrapper">
                <Formik
                    initialValues={{ name: '', description: '', price: '', image: '' }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        image: Yup.string()
                            .max(1000, 'Must be 15 characters or less')
                            .required('Required'),
                        description: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                        price: Yup.number().required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            createPoruct(values)
                        }, 400);
                    }}
                ><div className=''>
                        <div className='flex justify-center items-center text-3xl font-bold py-10' >
                            ADD PAGE
                        </div>
                        <Form className=' max-w-[400px] m-auto border py-10 px-10 '>
                            <div className='flex justify-between py-3 gap-8'>
                                <label htmlFor="name">Name</label>
                                <Field name="name" type="text" className='border' />
                            </div>
                            <div><ErrorMessage name="name" /></div>
                            <div className='flex justify-between py-3 gap-8'><label htmlFor="description">Description</label>
                                <Field name="description" type="text" className='border' />

                            </div>
                            <div><ErrorMessage name="description" /></div>

                            <div className='flex justify-between py-3 gap-8'>
                                <label htmlFor="image">image</label>
                                <Field name="image" type="text" className='border' />

                            </div>
                            <div>
                                <ErrorMessage name="image" />

                            </div>
                            <div className='flex justify-between py-3 gap-8'>
                                <label htmlFor="price">price</label>
                                <Field name="price" type="text" className='border' />

                            </div>
                            <div>
                                <ErrorMessage name="price" />
                            </div>

                            <div className='flex justify-center items-center py-4'>
                                <button className='bg-blue-500 text-white py-3 px-6 rounded-md ' type="submit">Submit</button>
                            </div>
                        </Form>
                    </div>

                </Formik>
            </div>
        </section>
    );
};

export default AddPage