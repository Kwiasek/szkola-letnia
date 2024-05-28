const Flashcard = ({ text, textColor, bgColor }) => {
  return (
    <div className={`info bg-${bgColor} rounded-xl p-3 text-justify`}>
      <p className={`text-lg text-${textColor}`}>{text}</p>
    </div>
  );
};

export default Flashcard;
