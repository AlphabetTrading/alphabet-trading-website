import clsx from "clsx";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import FormField from "../common/FormField";
import Tag from "../common/Tag";
import { Offering } from "../offerings/OfferingsItem";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  shippingAddress: string;
  city: string;
  state: string;
  zipCode: string;
}
const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  companyName: "",
  shippingAddress: "",
  city: "",
  state: "",
  zipCode: "",
} as FormValues;

type Props = {
  handleOfferingCheck: (offering: Offering) => void;
  selectedProducts: Offering[];
  onClose: () => void;
};

const SendRequestModal = ({
  handleOfferingCheck,
  selectedProducts,
  onClose,
}: Props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className=" transition-all duration-200 py-8 text-[#565656] w-screen h-full absolute top-0 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-30 z-[100]">
        <Formik initialValues={INITIAL_VALUES} onSubmit={() => {}}>
          {(formik) => (
            <div>
              <Form className="flex flex-col gap-y-5">
                <div
                  role="alert"
                  className="flex flex-col  justify-center items-center gap-y-3 min-h-fit bg-white container mx-auto w-11/12 md:w-1/2 lg:w-2/5 xl:w-[38%] rounded-xl px-10 py-16 relative"
                >
                  <div
                    className="cursor-pointer absolute top-8 right-8"
                    onClick={() => onClose()}
                  >
                    <svg
                      className="font-bold text-gray-600"
                      width={24}
                      height={24}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 7L7 21"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7L21 21"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="w-full flex flex-col  justify-center items-center gap-y-3">
                    <h2 className="font-semibold text-lg self-start">
                      Selected Products
                    </h2>
                    <div className="flex flex-wrap self-start gap-2 font-semibold">
                      {selectedProducts?.map(
                        (product: Offering, index: number) => {
                          return (
                            <Tag value={product.type} key={index}>
                              <p className="text-xs">
                                {product.type} {product.grade}
                              </p>
                              <IoMdClose
                                onClick={() => {
                                  handleOfferingCheck(product);
                                }}
                              />
                            </Tag>
                          );
                        }
                      )}
                    </div>
                    <p className="text-xs font-semibold  self-start mb-2">
                      Please enter your address below and we will send samples
                      in 3-5 business days.{" "}
                    </p>

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
                    <div className="w-full flex gap-x-4">
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
                    </div>
                    <FormField
                      id="cname"
                      name="cname"
                      placeholder="Company Name"
                      formik={formik}
                      label="Company Name"
                    />
                    <FormField
                      id="shipAdd"
                      name="shipAdd"
                      placeholder="Shipping Address"
                      formik={formik}
                      label="Shipping Address"
                    />
                    <div className="w-full flex gap-x-4">
                      <div className="w-2/5">
                        <FormField
                          id="city"
                          name="city"
                          placeholder="City"
                          formik={formik}
                          label="City"
                        />
                      </div>
                      <div className="w-3/5 flex gap-x-4">
                        <div className="w-1/2">
                          <FormField
                            id="state"
                            name="state"
                            placeholder="State"
                            formik={formik}
                            label="State"
                          />
                        </div>
                        <div className="w-1/2">
                          <FormField
                            id="zip"
                            name="zip"
                            placeholder="Zip code"
                            formik={formik}
                            label="Zip code"
                          />
                        </div>
                      </div>
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
                      disabled={selectedProducts.length === 0}
                      className={clsx(
                        "w-full flex items-center justify-center gap-x-3  px-6 py-3 mt-4 text-sm font-bold text-white rounded-lg",
                        selectedProducts.length === 0
                          ? "bg-secondary/20 cursor-not-allowed"
                          : "bg-secondary"
                      )}
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
                      Send Request
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SendRequestModal;
