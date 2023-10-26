import { RotatingLines } from "react-loader-spinner";

const LoadIndicator: React.FC = () => {
  return (
    <RotatingLines
      strokeColor='grey'
      strokeWidth='5'
      animationDuration='0.95'
      width='75'
      visible={true}
      />
  );
}

export default LoadIndicator;