
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Fragment } from "react";
import *  as yup from "yup";

const Customform = () => {
    const formInitialSchema = {
        name: '',
        email: '',
        password: ''
    }
    const formValidationschema = yup.object().shape({
        name: yup.string().required('name is required'),
        email: yup.string().required('email is required').email("please enter your email"),
        password: yup.string().required('password is required').min(6)
    })
    const handleFormSubmit = (value) => {
        console.log("submitted values", value)
    }
    return (
        <Fragment>
            <div clas="container">
                <div classsNameName="col-md-12" >
                    <h1 className="text-center">Formik and yup form</h1>
                </div>
            </div>
            <Formik initialValues={formInitialSchema}
                validationSchema={formValidationschema}
                onSubmit={(value => handleFormSubmit(value))}>
                <Form>
                    <Field type="text" name="name" placeholder="Enter your name" /><br />
                    <ErrorMessage name="name" /><br />
                    <Field type="text" name="email" placeholder="Email" /><br />
                    <ErrorMessage name="email" /><br />
                    <Field type="text" name="password" placeholder="password" /><br />
                    <ErrorMessage name="password" /><br />
                    <button type="submit">submit</button>
                </Form>

            </Formik>

        </Fragment>
    )
}
export default Customform;