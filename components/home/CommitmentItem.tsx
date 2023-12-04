import clsx from "clsx";
import React from "react";

type Props = {
  className?: string;
  headerColor: string;
  header: string;
  titleColor: string;
  title: string;
  descriptionColor: string;
  descriptions: string[];
};

const CommitmentItem = ({
  className,
  header,
  headerColor,
  title,
  titleColor,
  descriptions,
  descriptionColor,
}: Props) => {
  return (
    <div
      className={clsx(
        className,
        "flex flex-col justify-center gap-y-4 p-4 lg:p-6 py-8"
      )}
    >
      <div>
        <h1
          className={clsx(
            headerColor,
            "font-bold text-xs lg:text-sm uppercase"
          )}
        >
          {header}
        </h1>
        <h1 className={clsx(titleColor, "font-bold text-xl lg:text-2xl")}>
          {title}
        </h1>
      </div>
      {descriptions.map((description, index) => {
        return (
          <p
            key={index}
            className={clsx(descriptionColor, "font-medium text-xs lg:text-sm")}
          >
            {description}
          </p>
        );
      })}
    </div>
  );
};

export default CommitmentItem;
