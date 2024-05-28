/* eslint-disable react/prop-types */
const Stat = ({ title, number, desc, bgColor }) => {
  return (
    <div
      className={`stat w-1/3 bg-${bgColor} rounded-xl p-5 text-center font-bold`}
    >
      <h3 className="text-3xl pb-5">{title}</h3>
      <p className="text-5xl pb-5">{number}</p>
      <p className="font-normal text-2xl">{desc}</p>
    </div>
  );
};

export default Stat;
