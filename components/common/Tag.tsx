import React from "react";
import { WithChildren } from "../../types/common";

interface TagProps extends WithChildren {
  value: string;
}

const Tag = (props: TagProps) => {
  return (
    <div className="w-fit h-8 flex flex-row justify-between p-2 border rounded-full gap-x-2 bg-[#E6E6E6]">
      {props.children}
    </div>
  );
};

export default Tag;
