import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { AiOutlineArrowRight } from "react-icons/ai";
import * as Yup from 'yup';
interface RegistrationField {
    fullName: string;
    password: string;
    emailAddress: string;
    confirm_password: string;

    
}
 const SignUp = () => {
     const initialValues: RegistrationField = {
        fullName: '',
        emailAddress: '',
        password: '',
        confirm_password: '',
    }
    const SignupSchema = Yup.object().shape({
        fullName: Yup.string().required("Please enter full name."),
        emailAddress: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string()
            .min(3, 'Please Enter minimum 3 letter')
            .max(20, 'Too Long!')
            .required('Password is required'),
        confirm_password: Yup.string().label('confirm password').required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
       
        });
    const onSubmit = (data: object) =>{
        console.log(data)
    }
  return (<div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                       <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                         <Formik initialValues={initialValues} validationSchema={SignupSchema}  onSubmit={onSubmit}>
                        {({ errors, touched }) => (
                            <Form autoComplete="off">
                        <Field 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded"
                            name="fullName"
                            placeholder="Full Name" autoComplete="off"/>
                            <div className='text-red-800 mb-4'> {errors.fullName && touched.fullName ? (
                                <div>{errors.fullName}</div>
                            ) : null}</div>
                        <Field 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded"
                            name="emailAddress"
                            placeholder="Email" autoComplete="off"/>
                            <div className='text-red-800 mb-4'> {errors.emailAddress && touched.emailAddress ? (
                                <div>{errors.emailAddress}</div>
                            ) : null}</div>
    
                        <Field 
                            type="password" autoComplete="off"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                          <div className='text-red-800 mb-4'> {errors.password && touched.password ? (
                                <div>{errors.password}</div>
                            ) : null}</div>
                        <Field 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" autoComplete="off" />
                           <div className='text-red-800 mb-4'> {errors.confirm_password && touched.confirm_password ? (
                                <div>{errors.confirm_password}</div>
                            ) : null}</div>
    
                    <div className='flex group relative text-center scale-100 hover:scale-110 ease-in duration-500 hover:text-white'>
                    <button  type="submit" className="text-center py-1 mt-2 w-full text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 text-3xl py-3 ">Create Account</button>
                    <AiOutlineArrowRight className='right-2 absolute top-5 bottom-0 w-9 text-1xl '/>
                    </div>
                    </Form>
                    )}
                    </Formik>
    
                       <div className="text-center text-sm text-grey-dark mt-4">
                            Go to &nbsp;
                            <Link className="no-underline border-b border-grey-dark text-grey-dark" href="/login">
                                <a className='text-blue-600 uppercase hover:underline'>
                                Login
                                </a>
                            </Link> 
                        </div>
                    </div>
    
                   
                </div>
            </div>)
}
export default SignUp
