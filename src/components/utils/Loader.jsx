import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <Bars
      height="25"
      width="25"
      color="#ffffff"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
