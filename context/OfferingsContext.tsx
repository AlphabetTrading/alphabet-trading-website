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
import { sort_by, sortByField, sortOfferingsRequestFN } from "../utils/common";
import offerings from "../data/offerings.json";
import {
  IFilterOfferings,
  IOffering,
  IOfferingRequest,
} from "../types/offerings";

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
  filterOfferings: (filter: IFilterOfferings) => void;
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
  filterOfferings: (filter: IFilterOfferings) => {},
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
    ({ filterBy, sortBy }: IFilterOfferings) => {
      const sortedOffs = offeringRequests
        .filter((offer) => {
          let filter = true;
          if (filterBy.query) {
            filter = offer.type
              .toLowerCase()
              .includes(filterBy.query.toLowerCase());
          }

          if (filterBy.grade && filterBy.grade.length > 0) {
            filter = filter && filterBy.grade.includes(offer.grade);
          }

          if (filterBy.process && filterBy.process.length > 0) {
            filter = filter && filterBy.process.includes(offer.process);
          }

          if (
            filterBy.bagsRange &&
            filterBy.bagsRange.length > 0 &&
            offer.quantity
          ) {
            filter =
              filter &&
              filterBy.bagsRange[0] <= offer.quantity &&
              offer.quantity <= filterBy.bagsRange[1];
          }

          if (filterBy.origin && filterBy.origin.size > 0) {
            filter = filter && filterBy.origin.has(offer.origin.kebele);
          }

          return filter;
        })
        .sort(sortByField(sortBy.field, sortBy.reverse, sortBy.primer as any));
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
