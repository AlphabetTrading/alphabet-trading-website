import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import FormField from "../common/FormField";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  companyName?: string;
  message: string;
}

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  companyName: "",
  message: "",
} as FormValues;

const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="w-full md:w-1/3 text-[#282828] p-10 rounded-lg">
        <h1 className="text-[46px] font-bold mb-6">Contact Us</h1>
        <Formik initialValues={INITIAL_VALUES} onSubmit={() => {}}>
          {(formik) => (
            <div>
              <Form className="flex flex-col gap-y-5">
                <div className="w-full flex gap-x-4">
                  <FormField
                    id="fname"
                    name="fname"
                    placeholder="First Name"
                    formik={formik}
                    label="First Name"
                  />

                  <FormField
                    id="lname"
                    name="lname"
                    placeholder="Last Name"
                    formik={formik}
                    label="Last Name"
                  />
                </div>

                <FormField
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  formik={formik}
                  label="Email"
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
                  name="cname"
                  placeholder="Company Name"
                  formik={formik}
                  label="Company Name"
                />
                <div className="w-full">
                  <h1>Message</h1>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-secondary/20 resize-none p-2 placeholder:text-sm"
                    //   formik={formik}
                  />
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
                  className="w-full flex items-center justify-center gap-x-3  px-6 py-3 mt-4 text-sm font-bold text-white bg-primary rounded-lg"
                >
                  {loading && (
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
