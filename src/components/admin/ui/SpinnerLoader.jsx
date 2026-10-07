import { RotatingLines } from "react-loader-spinner";

export default function SpinnerLoader() {
  return (
    <RotatingLines
      visible={true}
      height={16}
      width={16}
      color="#b0552a"
      animationDuration="0.5"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
