import clsx from "clsx";
import React, { useState } from "react";

export type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  text: string;
  icon?: any;
  classname?: string;
  disabled?: boolean;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      aria-label={props.text}
      disabled={props.disabled}
      onClick={props.onClick}
      className={clsx(
        props.classname,
        "flex items-center h-10 w-fit p-2 px-4 rounded-md"
      )}
    >
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
