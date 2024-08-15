import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
export const Login = () => {
    const formik = useFormik({
        initialValues: {
          firstName: '',
        },
        validationSchema: Yup.object({
          firstName: Yup.string().required('First Name is required'),
        }),
        onSubmit: (values,{resetForm}) => {
          resetForm();
          console.log(JSON.stringify(values, null, 2));
        },
      });
  return (
    <div>
         <div className="w-75">
                  <div className="input-group mb-2">
                    <input
                      type="text"
                      className="form-control rounded-5 mb-0"
                      placeholder="First Name"
                      {...formik.getFieldProps("firstName")}
                    />
                   
                  </div>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="std_error_form">
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>
    </div>
  )
}

{/* <FormikErrorMsg name="email" containerClassName="mt-1" />; */}