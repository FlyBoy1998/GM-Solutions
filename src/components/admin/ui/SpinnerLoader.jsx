import { RotatingLines } from "react-loader-spinner";

export default function SpinnerLoader() {
  return (
    <RotatingLines
      visible={true}
      height={24}
      width={24}
      color="white"
      animationDuration="0.5"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
