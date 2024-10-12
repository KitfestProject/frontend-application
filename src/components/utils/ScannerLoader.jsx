import { ColorRing } from "react-loader-spinner";

const ScannerLoader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={["#ffffff", "#ff0000", "#0000ff", "#00ff00"]}
    />
  );
};

export default ScannerLoader;
