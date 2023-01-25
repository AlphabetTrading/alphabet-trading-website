import { clsx } from "clsx";
import { Field, FormikProps } from "formik";
import React from "react";

type Props = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  formik: FormikProps<any>;
};

const FormField = ({ id, name, placeholder, label, formik }: Props) => {
  return (
    <div className="w-full">
      <h1 className="text-sm font-bold">{label}</h1>
      <Field
        id={id}
        name={name}
        placeholder={placeholder}
        type="text"
        className={clsx(
          "w-full text-sm placeholder-[#949494] resize-none bg-secondary/10 rounded-md focus:outline-none py-2 px-2 my-1",
          (formik.touched as any)[name] && (formik.errors as any)[name]
            ? "border-red-500"
            : ""
        )}
      />
      {(formik.touched as any)[name] && (formik.errors as any)[name] && (
        <p className="text-red-500 py-2 text-xs">
          {(formik.errors as any)[name]}
        </p>
      )}
    </div>
  );
};

export default FormField;
