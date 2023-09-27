import { ThreeDots } from "react-loader-spinner";

function Loader(props) {
  return (
    <ThreeDots
      color="#304ffe"
      ariaLabel="three-dot-loading"
      visible={true}
      wrapperStyle={{ margin: "auto" }}
      height={45}
    />
  );
}

export default Loader;
