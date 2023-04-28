export interface IOffering {
  id: number;
  type: string;
  grade: string;
  location: string;
  quantity: number;
  request?: string;
  process: string;
  origin: {
    region: string;
    zone: string;
    woreda: string;
    kebele: string;
  };
  priority: number;
}

export interface IOfferingRequest extends IOffering {
  isSelected: boolean;
}

export interface IFilterOfferings {
  sortBy: {
    field: keyof IOfferingRequest;
    reverse: boolean;
    primer: Function;
  };
  filterBy: {
    query?: string;
    grade?: string[];
    price?: number[];
    priority?: number;
    bagsRange?: [number, number];
    process?: string[];
    origin?: Set<string>;
  };
}
