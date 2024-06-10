import { useEffect, useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ParticlesComponent from "./Particles";

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
      className={`bg-coffee w-full mx-auto flex justify-center items-center relative overflow-hidden mt-16`}
      style={{ height: height + "px" }}
      id="header"
    >
      <ParticlesComponent />
      <p className="sm:text-7xl text-5xl text-gray-600 font-kalam font-bold select-none">
        Letnie smaki
      </p>
      <a
        className="absolute bottom-14 left-[calc(1/2 - 35/2px)] transform -translate-x-1/2 -translate-y-1/2 animate-bounce"
        href="#project"
      >
        <KeyboardDoubleArrowDownIcon fontSize="large" />
      </a>
    </div>
  );
};

export default Header;
