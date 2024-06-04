import { useEffect, useState } from "react";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

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
      <a className="absolute bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" href="#project"><KeyboardDoubleArrowDownIcon fontSize='large'/></a>
    </div>
  );
};

export default Header;
