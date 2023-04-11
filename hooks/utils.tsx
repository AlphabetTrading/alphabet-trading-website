import { useMediaQuery } from "./useMediaQuery";

export const useIsXSmall = () => useMediaQuery({ query: "(max-width: 480px)" });
export const useIsSmall = () => useMediaQuery({ query: "(max-width: 640px)" });
export const useIsMedium = () => useMediaQuery({ query: "(max-width: 768px)" });
export const useIsLarge = () => useMediaQuery({ query: "(max-width: 1024px)" });
export const useIsXL = () => useMediaQuery({ query: "(max-width: 1280px)" });
export const useIs2XL = () => useMediaQuery({ query: "(min-width: 1536px)" });
