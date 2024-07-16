import { Bars } from "react-loader-spinner";

const Loader = ({ color = "#ffffff" }) => {
  return (
    <Bars
      height="25"
      width="25"
      color={color}
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
