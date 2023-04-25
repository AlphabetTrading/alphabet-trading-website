import React, { useEffect, useState } from "react";
import GetSVG from "../common/GetSVG";
import clsx from "clsx";

type Props = {
  filterBy: {
    query?: string;
    grade?: string[];
    price?: number[];
    process?: string[];
    origin?: Set<string>;
  };
  setFilterBy: React.Dispatch<
    React.SetStateAction<{
      query?: string;
      grade?: string[];
      price?: number[];
      process?: string[];
      origin?: Set<string>;
    }>
  >;
};

const ProcessFilter = (props: Props) => {
  const [checkedItems, setCheckedItems] = useState<string[]>(
    props.filterBy.process || []
  );

  const handleChange = (e: any) => {
    const { value, checked } = e.target;
    if (checked) {
      const items = [...new Set([...(props.filterBy.process || []), value])];
      setCheckedItems((prev: any) => items);
      props.setFilterBy((prev) => ({
        ...prev,
        process: items,
      }));
    } else {
      const items = [
        ...new Set([
          ...(props.filterBy.process || []).filter((x: any) => x !== value),
        ]),
      ];
      setCheckedItems((prev: any) => items);
      props.setFilterBy((prev) => ({
        ...prev,
        process: items,
      }));
    }
  };

  // useEffect(() => {
  //   props.setFilterBy((prev) => ({ ...prev, process: checkedItems }));
  // }, [checkedItems]);

  return (
    <div>
      <ul className="flex flex-col gap-y-1">
        {["Washed", "Natural"].map((item) => {
          return (
            <li
              key={item}
              className={clsx(
                "flex gap-x-2 items-center  px-5 py-1 rounded-md overflow-hidden  relative cursor-pointer"
              )}
            >
              <input
                onChange={handleChange}
                value={item}
                checked={props.filterBy.process?.includes(item)}
                type="checkbox"
                className="appearance-none w-full h-full absolute z-20 peer/select inset-0"
              />
              <div className="w-full h-full peer-checked/select:bg-secondary/20 peer-hover/select:bg-secondary/5 absolute inset-0"></div>
              <GetSVG
                name="check-mark"
                className={clsx("hidden peer-checked/select:inline-flex")}
              />
              <p className="capitalize">{item}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProcessFilter;
