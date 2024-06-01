/* eslint-disable react/prop-types */
import CountUp from "react-countup";

const Counter = ({ number }) => {
  return (
    <div className="number flex justify-center">
      <CountUp
        duration={5}
        className="text-5xl pb-5"
        end={number}
        enableScrollSpy="true"
      />
      <p className="text-5xl">+</p>
    </div>
  );
};

export default Counter;
