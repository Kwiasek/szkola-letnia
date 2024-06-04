/* eslint-disable react/prop-types */
const CarouselCard = ({ name, position, img, text }) => {
  return (
    <div className="h-[530px] px-6 py-2 bg-coffee-700 w-[350px] rounded-xl flex flex-col justify-center items-center border-black border-2">
      <p className="text-3xl text-coffee-100">{name}</p>
      <p className="text-xl text-coffee-300 mb-2">{position}</p>
      <img src={img} className="max-h-[300px] mb-2 rounded-md" alt={name} />
      <p className="text-white text-justify">{text}</p>
    </div>
  );
};

export default CarouselCard;
