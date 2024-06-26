import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  useMemo,
} from "react";

type Props = {
  min: number;
  max: number;
  unit: string;
  step: number;
  filterBy: {
    query?: string;
    grade?: string[];
    price?: number[];
    bagsRange?: [number, number];
    process?: string[];
    origin?: Set<string>;
  };
  setFilterBy: React.Dispatch<
    React.SetStateAction<{
      query?: string;
      grade?: string[];
      price?: number[];
      bagsRange?: [number, number];
      process?: string[];
      origin?: Set<string>;
    }>
  >;
};
const MultiRangeSlider = ({
  min,
  max,
  unit,
  step,
  filterBy,
  setFilterBy,
}: Props) => {
  const [values, setValues] = useState<[number, number]>(
    filterBy.bagsRange || [0, 980]
  );

  const [minVal, setMinVal] = useState(values[0]);
  const [maxVal, setMaxVal] = useState(values[1]);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<any>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: any) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent, values]);

  // Get min and max values when their state changes
  useEffect(() => {
    setValues([minVal, maxVal]);
    setFilterBy((prev) => ({ ...prev, bagsRange: [minVal, maxVal] }));
  }, [minVal, maxVal]);

  return (
    <div className="flex flex-col">
      <div className="relative flex items-center justify-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step.toString()}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className="thumb !z-10 absolute"
          style={{ zIndex: (minVal > max - 100 && "5") || "0" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          step={step.toString()}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className="thumb !z-20 absolute"
        />

        <div className="relative h-8 flex items-center justify-center  w-full ">
          <div className="slider__track inset-0 top-1/2 -translate-y-1/2 absolute -z-[10] h-[6px] rounded-lg bg-secondary/5 " />
          <div
            ref={range}
            className="slider__range absolute inset-0 top-1/2 -translate-y-1/2  z-[0] h-[6px] rounded-lg bg-amber-400 "
          />
        </div>
      </div>
      <div className="flex justify-between items-center h-2 text-xs transition-all ease-in-out">
        <div className="slider__left-value">
          {minVal} {unit}
        </div>
        <div className="slider__right-value">
          {maxVal} {unit}
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
