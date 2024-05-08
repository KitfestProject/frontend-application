import { useMediaQuery } from "react-responsive";

const useScreenSize = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile;
};

export default useScreenSize;

// Now you can use this hook in your components to check if the screen size is mobile or not.
// Path: src/components/MyComponent.mjs
