/* eslint-disable react/prop-types */
import Counter from "./Counter";
import colors from "../../js/colors";

const Stat = (props) => {
  return (
    <div
      className={`stat w-1/3 ${
        colors.bg[props.bgColor]
      } rounded-xl p-5 text-center font-bold border-2 border-black text-coffee-100`}
    >
      <h3 className="text-3xl pb-5">{props.title}</h3>
      {/* <p className="text-5xl pb-5">{props.number}</p> */}
      <Counter number={props.number} />
      <p className="font-normal text-2xl">{props.desc}</p>
    </div>
  );
};

export default Stat;
