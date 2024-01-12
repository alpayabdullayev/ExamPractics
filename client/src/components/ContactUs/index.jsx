import React from 'react'
import SecionTitle from '../sectionTitle'
import { FaLocationDot } from "react-icons/fa6";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactUs = () => {
    return (
        <>
            <section className='py-20'>
                <div className="wrapper">
                    <SecionTitle children={"Contact Us"} />
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
                        <div className='text-center flex flex-col justify-center items-center gap-2'>
                            <div>
                                <span className='text-blue-500'><FaLocationDot /></span>

                            </div>
                            <h5>
                                203 Fake St. Mountain View, San Francisco, California, USA
                            </h5>
                        </div>
                        <div className='text-center flex flex-col justify-center items-center gap-2'>
                            <div>
                                <span className='text-blue-500'><FaLocationDot /></span>

                            </div>
                            <h5>
                                203 Fake St. Mountain View, San Francisco, California, USA
                            </h5>
                        </div>
                        <div className='text-center flex flex-col justify-center items-center gap-2'>
                            <div>
                                <span className='text-blue-500'><FaLocationDot /></span>

                            </div>
                            <h5>
                                203 Fake St. Mountain View, San Francisco, California, USA
                            </h5>
                        </div>

                    </div>
                    <Formik
                        initialValues={{ firstName: '', lastName: '', email: '', message: '' }}
                        validationSchema={Yup.object({
                            firstName: Yup.string()
                                .max(15, 'Must be 15 characters or less')
                                .required('Required'),
                            lastName: Yup.string()
                                .max(20, 'Must be 20 characters or less')
                                .required('Required'),
                            message: Yup.string().required('Required'),
                            email: Yup.string().email('Invalid email address').required('Required'),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        <Form className='w-full flex flex-col justify-center'>

                            <div className='grid grid-cols-1 md:grid-cols-1 gap-4'>
                                <div className='w-full flex'>
                                <div className='w-full'>
                                    <label htmlFor="firstName">First Name</label> <br />
                                    <Field name="firstName" type="text" className='border w-full px-2 py-2' />
                                   
                                </div>
                                <div className=''>
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="lastname">First Name</label> <br />
                                    <Field name="lastname" type="text"  className='border w-full px-2 py-2' />
                                    
                                </div>
                                <div>
                                </div>
                                </div>
                            </div>




                            <label htmlFor="email">Email Address</label>
                            <Field name="email" type="email" className='border px-2 py-2' />
                            <ErrorMessage name="email" />

                            <div className="mb-4">
                                <label htmlFor="message" className=" text-body-text-purple text-sm font-bold mb-2">
                                    Şərhiniz
                                </label>
                                <Field
                                    name="message"
                                    as="textarea"
                                    rows="4"
                                    className="w-full p-2 border border-gray-300 rounded px-2 py-2"
                                />
                                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <button type="submit">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </section>
        </>
    )
}

export default ContactUs