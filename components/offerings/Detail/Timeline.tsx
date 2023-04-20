import React from "react";
import style from "../../../styles/Timeline.module.css";
import clsx from "clsx";

type Props = {
  current: number;
  total: number;
};

const Timeline = ({ current, total }: Props) => {
  const progressBarWidth = total > 1 ? ((current - 1) / (total - 1)) * 100 : 0;
  return (
    <div
      className={clsx(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        style.timeline
      )}
    >
      <div
        className={style["timeline-progress"]}
        style={{ height: `${progressBarWidth}%` }}
      ></div>
      <div
        className={clsx(
          "absolute top-0 left-1/2 -translate-x-1/2",
          style["timeline-items"]
        )}
      >
        {[...Array(total).fill(0)].map((_, i) => (
          <div
            key={i}
            className={clsx(
              "relative flex justify-center items-center ",
              i != current - 1
                ? "border-[0.5px] border-[#D9D9D9] rounded-full"
                : "",
              style["timeline-item"],
              i <= current - 1 ? style["active"] : "",
              i == current - 1 ? style["completed"] : ""
            )}
          >
            {i == current - 1 && (
              <>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 border-2 border-[#F2A40C]/80 rounded-full animate-pulse transform ease-in-out duration-150"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border-2 border-[#F2A40C]/40 rounded-full animate-pulse transform ease-in-out duration-200"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 border-2 border-[#F2A40C]/10 rounded-full animate-pulse transform ease-in-out duration-300"></div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
