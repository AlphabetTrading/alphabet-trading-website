import { clsx } from "clsx";
import { Field, FormikErrors, FormikProps, FormikTouched } from "formik";
import React from "react";
import { FormValues } from "../contact/ContactForm";

type Props = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  formik: FormikProps<FormValues>;
};

const FormField = ({ id, name, placeholder, label, formik }: Props) => {
  return (
    <div className="w-full">
      <h1 className="text-xs font-semibold">{label}</h1>
      <Field
        id={id}
        name={name}
        placeholder={placeholder}
        type="text"
        className={clsx(
          "w-full text-xs placeholder-[#949494] border resize-none bg-secondary/20 rounded-md focus:outline-none py-2 px-2 my-1",
          (formik.touched as any)[name] && (formik.errors as any)[name]
            ? "border-red-500"
            : "border-[#DCDCDC]"
        )}
      />
    </div>
  );
};

export default FormField;
