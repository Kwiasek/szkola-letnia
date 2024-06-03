/* eslint-disable react/prop-types */
import colors from "../../js/colors";

const Flashcard = (props) => {
  return (
    <div
      className={`info ${colors.bg[props.bgColor]} rounded-xl p-3 text-justify border-2 border-coffee-800`}
    >
      <p className={`text-lg`}>{props.text}</p>
    </div>
  );
};

export default Flashcard;
