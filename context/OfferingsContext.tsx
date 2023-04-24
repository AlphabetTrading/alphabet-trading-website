"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { sort_by } from "../utils/common";
import offerings from "../data/offerings.json";

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
}

export interface IOfferingRequest extends IOffering {
  isSelected: boolean;
}

interface IOfferingContextProps {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<any>>;
  offerings: IOffering[];
  setOfferings: Dispatch<SetStateAction<any>>;
  offeringRequests: IOfferingRequest[];
  filteredOfferingRequests: IOfferingRequest[];
  setOfferingRequests: Dispatch<SetStateAction<any>>;
  setFilteredOfferingRequests: Dispatch<SetStateAction<any>>;
  selectedOfferings: IOfferingRequest[];
  filterOfferings: (
    sortBy: {
      field: string;
      reverse: boolean;
      primer: Function;
    },
    filterBy: {
      query?: string;
      grade?: string[];
      price?: number[];
      bagsRange?: [number, number];
      process?: string[];
      origin?: string[];
    }
  ) => void;
}

const offeringsData: IOffering[] = offerings;
export const OfferingsContext = createContext<IOfferingContextProps>({
  loading: false,
  setLoading: () => {},
  offerings: offeringsData,
  setOfferings: () => {},
  offeringRequests: [],
  setOfferingRequests: () => {},
  filteredOfferingRequests: [],
  setFilteredOfferingRequests: () => {},
  selectedOfferings: [],
  filterOfferings: (
    sortBy: {
      field: string;
      reverse: boolean;
      primer: Function;
    },
    filterBy: {
      query?: string;
      grade?: string[];
      price?: number[];
      bagsRange?: [number, number];
      process?: string[];
      origin?: string[];
    }
  ) => {},
});

export function OfferingsContextWrapper({ children }: any) {
  const [loading, setLoading] = useState(true);
  const [offeringRequests, setOfferingRequests] = useState<
    Array<IOfferingRequest>
  >(offeringsData.map((val) => ({ ...val, isSelected: false })));
  const [filteredOfferingRequests, setFilteredOfferingRequests] = useState<
    Array<IOfferingRequest>
  >(offeringsData.map((val) => ({ ...val, isSelected: false })));
  const [offerings, setOfferings] = useState(offeringsData);
  const [selectedOfferings, setSelectedOfferings] = useState<
    IOfferingRequest[]
  >([]);

  const filterOfferings = useCallback(
    (
      sortBy: {
        field: string;
        reverse: boolean;
        primer: Function;
      },
      filterBy: {
        query?: string;
        grade?: string[];
        price?: number[];
        bagsRange?: [number, number];
        process?: string[];
        origin?: string[];
      }
    ) => {
      const sortedOffs = offeringRequests
        .filter((offer) => {
          let filter = true;
          if (filterBy.query) {
            filter = offer.type
              .toLowerCase()
              .includes(filterBy.query.toLowerCase());
          }

          if (filterBy.grade && filterBy.grade.length > 0) {
            filter = filterBy.grade.includes(offer.grade);
          }
          if (filterBy.origin && filterBy.origin.length > 0) {
            filter = filterBy.origin.includes(offer.origin.kebele);
          }
          if (filterBy.process && filterBy.process.length > 0) {
            filter = filterBy.process.includes(offer.process);
          }

          if (
            filterBy.bagsRange &&
            filterBy.bagsRange.length > 0 &&
            offer.quantity
          ) {
            filter =
              filterBy.bagsRange[0] <= offer.quantity &&
              offer.quantity <= filterBy.bagsRange[1];
          }

          return filter;
        })
        .sort(sort_by(sortBy));
      setFilteredOfferingRequests(sortedOffs);
      setSelectedOfferings(sortedOffs.filter((off) => off.isSelected));
    },
    [offeringRequests]
  );

  // const filterOfferings = (
  //   sortBy: {
  //     field: string;
  //     reverse: boolean;
  //     primer: Function;
  //   },
  //   query: string
  // ) => {
  //   const sortedOffs = offeringRequests
  //     .filter((offer) => offer.type.toLowerCase().includes(query.toLowerCase()))
  //     .sort(sort_by(sortBy));
  //   setFilteredOfferingRequests(sortedOffs);
  //   setSelectedOfferings(sortedOffs.filter((off) => off.isSelected));
  // };

  useEffect(() => {
    setSelectedOfferings(
      filteredOfferingRequests.filter((off) => off.isSelected)
    );
  }, [filteredOfferingRequests, offeringRequests]);

  let sharedState: IOfferingContextProps = useMemo(
    () => ({
      loading,
      setLoading,
      offerings,
      setOfferings,
      setOfferingRequests,
      offeringRequests,
      setFilteredOfferingRequests,
      filteredOfferingRequests,
      selectedOfferings,
      filterOfferings,
    }),
    [
      loading,
      offerings,
      offeringRequests,
      filteredOfferingRequests,
      selectedOfferings,
      filterOfferings,
    ]
  );

  return (
    <OfferingsContext.Provider value={sharedState}>
      {children}
    </OfferingsContext.Provider>
  );
}

export const useOfferingsContext = () => {
  return useContext(OfferingsContext);
};
