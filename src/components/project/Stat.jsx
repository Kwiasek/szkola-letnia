/* eslint-disable react/prop-types */
import Counter from "./Counter";
const Stat = (props) => {
  const bgColors = {
    "coffee-200": "bg-coffee-200",
    "coffee-400": "bg-coffee-400",
    "coffee-600": "bg-coffee-600",
  };

  return (
    <div
      className={`stat w-1/3 ${
        bgColors[props.bgColor]
      } rounded-xl p-5 text-center font-bold`}
    >
      <h3 className="text-3xl pb-5">{props.title}</h3>
      {/* <p className="text-5xl pb-5">{props.number}</p> */}
      <Counter number={props.number} />
      <p className="font-normal text-2xl">{props.desc}</p>
    </div>
  );
};

export default Stat;
