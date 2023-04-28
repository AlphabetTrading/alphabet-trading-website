import { IOfferingRequest } from "../types/offerings";

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

export const sortOfferingsRequestFN = (
  a: IOfferingRequest,
  b: IOfferingRequest
) => {
  if (a.type !== b.type) {
    return a.type.localeCompare(b.type);
  }
  if (a.grade !== b.grade) {
    return a.grade.localeCompare(b.grade);
  }
  if (a.quantity !== b.quantity) {
    return a.quantity - b.quantity;
  }
  if (a.location !== b.location) {
    return a.location.localeCompare(b.location);
  }
  if (a.process !== b.process) {
    return a.process.localeCompare(b.process);
  }
  if (a.priority !== b.priority) {
    return a.priority - b.priority;
  }
  return 0;
};

export function sortByField<IOfferingRequest>(
  fieldName: keyof IOfferingRequest,
  reverse = false,
  primer: (x: IOfferingRequest[keyof IOfferingRequest]) => Function | any = (
    x
  ) => x
): (a: IOfferingRequest, b: IOfferingRequest) => number {
  const sign = reverse ? -1 : 1;
  return (a: any, b: any) => {
    const aVal = primer(a[fieldName]);
    const bVal = primer(b[fieldName]);
    if (aVal < bVal) return -sign;
    if (aVal > bVal) return sign;
    if (a.hasOwnProperty("priority") && b.hasOwnProperty("priority")) {
      if (a.priority < b.priority) return -sign;
      if (a.priority > b.priority) return sign;
    }
    return 0;
  };
}
