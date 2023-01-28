import React from "react";
import { WithChildren } from "../../types/common";

interface TagProps extends WithChildren {
  value: string;
}

const Tag = (props: TagProps) => {
  return (
    <div className="w-fit h-8 2k:h-10 4k:h-12 flex flex-row items-center justify-between p-2 2k:p-3 4k:p-5 border rounded-full gap-x-2 bg-[#E6E6E6]">
      {props.children}
    </div>
  );
};

export default Tag;
