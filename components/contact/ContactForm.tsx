import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import FormField from "../common/FormField";
import * as yup from "yup";
import { sendContactUsEmail } from "../../lib/sendContactUsEmail";
import clsx from "clsx";
export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  companyName?: string;
  message: string;
}

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  companyName: "",
  message: "",
} as FormValues;

const schemaValidation = yup.object().shape({
  firstName: yup.string().required("Required!"),
  lastName: yup.string().required("Required!"),
  email: yup.string().email("Invalid email!").required("Required!"),
  companyName: yup.string().required("Required!"),
  phone: yup.string().required("Required!"),
  message: yup.string().required("Required!"),
});

const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <div className="w-full md:w-5/6 lg:w-1/3 xl:w-1/2 2k:w-4/5 text-[#282828] p-6 py-7 pr-10 rounded-lg">
        <h1 className="text-[46px] font-bold mb-6">Contact Us</h1>
        <Formik
          validationSchema={schemaValidation}
          initialValues={INITIAL_VALUES}
          onSubmit={async (values: any, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            try {
              await sendContactUsEmail(values);
              setSubmitting(false);
              resetForm();
            } catch (error: any) {
              setSubmitting(false);
              setErrorMessage(error.message);
            }
          }}
        >
          {(formik) => (
            <div>
              <Form className="flex flex-col gap-y-5">
                <div className="w-full flex gap-x-4">
                  <FormField
                    id="fname"
                    name="firstName"
                    placeholder="First Name"
                    formik={formik}
                    label="First Name *"
                  />

                  <FormField
                    id="lname"
                    name="lastName"
                    placeholder="Last Name"
                    formik={formik}
                    label="Last Name*"
                  />
                </div>

                <FormField
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  formik={formik}
                  label="Email*"
                />
                <FormField
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  formik={formik}
                  label="Phone No."
                />
                <FormField
                  id="cname"
                  name="companyName"
                  placeholder="Company Name"
                  formik={formik}
                  label="Company Name"
                />
                <div className="w-full">
                  <h1 className="text-sm font-bold">Message</h1>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={4}
                    className={clsx(
                      "w-full rounded-lg border bg-secondary/10 resize-none p-2 placeholder:text-sm appearance-none focus:outline-none",
                      formik.touched.message && formik.errors.message
                        ? "border-red-500"
                        : ""
                    )}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 py-1 text-xs">
                      {formik.errors.message.toString()}
                    </p>
                  )}
                </div>

                {errorMessage && (
                  <div className="bg-[#E4646451] py-1 rounded-md">
                    <span className="text-[#E46464] px-4 text-xs">
                      {errorMessage}
                    </span>
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-x-3  px-6 py-3 text-sm font-bold text-white bg-secondary rounded-lg"
                >
                  {formik.isSubmitting && (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                  Send Message
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ContactForm;
