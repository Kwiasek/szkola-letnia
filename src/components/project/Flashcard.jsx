/* eslint-disable react/prop-types */
const Flashcard = (props) => {
  const bgColors = {
    "coffee-200": "bg-coffee-200",
    "coffee-400": "bg-coffee-400",
    "coffee-600": "bg-coffee-600",
  };

  return (
    <div
      className={`info ${bgColors[props.bgColor]} rounded-xl p-3 text-justify`}
    >
      <p className={`text-lg`}>{props.text}</p>
    </div>
  );
};

export default Flashcard;
