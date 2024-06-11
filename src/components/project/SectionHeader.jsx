/* eslint-disable react/prop-types */
const SectionHeader = ({ text }) => {
  return (
    <h2 className="relative flex py-5 items-center text-3xl font-bold font-kalam">
      <div className="flex-grow border-t-2 border-gray-400"></div>
      <span className="flex-shrink mx-4 text-gray-400">{text}</span>
      <div className="flex-grow border-t-2 border-gray-400"></div>
    </h2>
  );
};

export default SectionHeader;
