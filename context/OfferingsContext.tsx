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

export interface IOffering {
  id: number;
  type: string;
  grade: string;
  location: string;
  availability: string;
  request?: string;
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
  setOfferingRequests: Dispatch<SetStateAction<any>>;
  selectedOfferings: IOfferingRequest[];
  filterOfferings: (sortBy: {
    field: string;
    reverse: boolean;
    primer: Function;
  }) => void;
}
const offeringsData: IOffering[] = [
  {
    id: 1,
    type: "Sidama",
    grade: "G-1",
    location: "Sidama Region, Ethiopia",
    availability: "Available",
  },
  {
    id: 2,
    type: "Washed Yirgacheeffee Idedo",
    grade: "G-2",
    location: "Southern Region, Ethiopia",
    availability: "Not Available",
  },
  {
    id: 3,
    type: "Limu",
    grade: "G-1",
    location: "Oromia Region, Ethiopia",
    availability: "Available",
  },
  {
    id: 4,
    type: "Guji",
    grade: "G-1",
    location: "Oromia Region, Ethiopia",
    availability: "Available",
  },
];
export const OfferingsContext = createContext<IOfferingContextProps>({
  loading: false,
  setLoading: () => {},
  offerings: offeringsData,
  setOfferings: () => {},
  offeringRequests: [],
  setOfferingRequests: () => {},
  selectedOfferings: [],
  filterOfferings: (sortBy: {
    field: string;
    reverse: boolean;
    primer: Function;
  }) => {},
});

export function OfferingsContextWrapper({ children }: any) {
  const [loading, setLoading] = useState(true);
  const [offeringRequests, setOfferingRequests] = useState<
    Array<IOfferingRequest>
  >(offeringsData.map((val) => ({ ...val, isSelected: false })));
  const [offerings, setOfferings] = useState(offeringsData);
  const [selectedOfferings, setSelectedOfferings] = useState<
    IOfferingRequest[]
  >([]);

  const filterOfferings = (sortBy: {
    field: string;
    reverse: boolean;
    primer: Function;
  }) => {
    console.log(offeringRequests.sort(sort_by(sortBy)), " s");
    const sortedOffs = offeringRequests.sort(sort_by(sortBy));
    setOfferingRequests(sortedOffs);
    setSelectedOfferings(sortedOffs.filter((off) => off.isSelected));
  };

  useEffect(() => {
    setSelectedOfferings(offeringRequests.filter((off) => off.isSelected));
  }, [offeringRequests]);

  let sharedState: IOfferingContextProps = useMemo(
    () => ({
      loading,
      setLoading,
      offerings,
      setOfferings,
      setOfferingRequests,
      offeringRequests,
      selectedOfferings,
      filterOfferings,
    }),
    [loading, offerings, offeringRequests, selectedOfferings]
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
