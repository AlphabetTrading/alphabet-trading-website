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
      <h1 className="text-sm 2k:text-lg 4k:text-2xl font-bold">{label}</h1>
      <Field
        id={id}
        name={name}
        placeholder={placeholder}
        type="text"
        className={clsx(
          "w-full text-sm 2k:text-md 4k:text-xl placeholder-[#949494] resize-none bg-secondary/10 rounded-md focus:outline-none p-2 2k:p-3 2k:py-5 4k:p-4 4k:py-6 my-1",
          (formik.touched as any)[name] && (formik.errors as any)[name]
            ? "border border-red-500"
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
