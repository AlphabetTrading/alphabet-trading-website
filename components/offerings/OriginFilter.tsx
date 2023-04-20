import React, { useEffect, useState } from "react";
import GetSVG from "../common/GetSVG";
import clsx from "clsx";

type Props = {
  filterBy: {
    query?: string;
    grade?: string[];
    price?: number[];
    process?: string[];
    origin?: string[];
  };
  setFilterBy: React.Dispatch<
    React.SetStateAction<{
      query?: string;
      grade?: string[];
      price?: number[];
      process?: string[];
      origin?: string[];
    }>
  >;
};

const grades = [
  {
    id: "1",
    code: "G-1",
    title: "Grade 1",
  },
  {
    id: "2",
    code: "G-2",
    title: "Grade 2",
  },
];

const OriginFilter = (props: Props) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleChange = (e: any) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedItems((prev: any) => [...prev, value]);
    } else {
      setCheckedItems((prev: any) => prev.filter((x: any) => x !== value));
    }
  };

  useEffect(() => {
    props.setFilterBy((prev) => ({ ...prev, grade: checkedItems }));
  }, [checkedItems, props]);

  return (
    <div>
      <ul className="flex flex-col gap-y-1">
        {grades.map((item) => {
          return (
            <li
              key={item.id}
              className={clsx(
                "flex gap-x-2 items-center  px-5 py-1 rounded-md overflow-hidden relative cursor-pointer"
              )}
              onClick={() => {
                props.setFilterBy((prev) => ({
                  ...prev,
                  grade: [item.code],
                }));
              }}
            >
              <input
                type="checkbox"
                onChange={handleChange}
                value={item.code}
                className="appearance-none w-full h-full absolute z-20 peer/select inset-0"
              />
              <div className="w-full h-full peer-checked/select:bg-secondary/20 peer-hover/select:bg-secondary/5 absolute inset-0"></div>
              <GetSVG
                name="check-mark"
                className={clsx("hidden peer-checked/select:inline-flex")}
              />
              <p className="capitalize">{item.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OriginFilter;
