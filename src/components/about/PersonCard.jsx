/* eslint-disable react/prop-types */
import colors from "../../js/colors";
const PersonCard = ({ name, position, img, text, height = 430, bgColor }) => {
  return (
    <div
      style={{ height: height + "px" }}
      className={`aspect-2/3 px-6 py-2 ${colors.bg[bgColor]} rounded-xl flex flex-col justify-center items-center border-black border-2 gap-1`}
    >
      <p className="text-3xl text-coffee-100">{name}</p>
      <p className="text-xl text-coffee-300 mb-2">{position}</p>
      <img
        src={img}
        className="mb-2 rounded-md"
        alt={name}
        style={{ height: (3 / 5) * height + "px" }}
      />
      <p className="text-white text-justify">{text}</p>
    </div>
  );
};

export default PersonCard;
