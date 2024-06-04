import { useEffect, useState } from "react";

const Header = () => {
  const [height, setHeight] = useState(window.innerHeight - 64);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newHeight = window.innerHeight - 64;
      setHeight(newHeight);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div
      className={`bg-coffee mx-auto flex justify-center items-center`}
      style={{ height: height + "px" }}
      id="header"
    >
      <p className=" text-7xl text-gray-600 font-kalam font-bold select-none">
        Letnie smaki
      </p>
    </div>
  );
};

export default Header;
