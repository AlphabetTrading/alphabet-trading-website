export const sort_by = ({
  field,
  reverse,
  primer,
}: {
  field: string;
  reverse: boolean;
  primer: Function;
}) => {
  const key: any = primer
    ? function (x: any) {
        return primer(x[field]);
      }
    : function (x: any) {
        return x[field];
      };

  const sortOrder = !reverse ? 1 : -1;

  return function (a: any, b: any) {
    return (
      (a = key(a)),
      (b = key(b)),
      sortOrder * (((a > b) as any) - ((b > a) as any))
    );
  };
};
