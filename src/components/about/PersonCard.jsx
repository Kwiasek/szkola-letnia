/* eslint-disable react/prop-types */
import colors from "../../js/colors";
const PersonCard = ({ name, position, img, text, bgColor, imgPosition }) => {
  return (
    <div
      className={`aspect-2/3 px-6 py-2 ${colors.bg[bgColor]} max-w-sm rounded-xl flex flex-col justify-center items-center border-coffee-800 border-2 gap-1`}
    >
      <p className="text-3xl text-coffee-100">{name}</p>
      <p className="text-xl text-coffee-300 mb-2">{position}</p>
      <img
        src={img}
        className="mb-2 rounded-md max-h-fit max-w-64 h-auto aspect-2/3 object-cover"
        alt={name}
        style={{ objectPosition: imgPosition }}
      />
      <p className="text-white text-justify">{text}</p>
    </div>
  );
};

export default PersonCard;
