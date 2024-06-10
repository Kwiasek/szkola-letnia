import LocalDiningIcon from "@mui/icons-material/LocalDining";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  const changeSetMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  return (
    <>
      {width > 1024 ? (
        <nav className="flex shrink-0 justify-between px-10 py-4 font-bold items-center fixed w-full left-0 top-0 h-16 bg-white/75 z-10 backdrop-blur-sm scroll-smooth scroll-pt-[64px]">
          <a href="#header" className="flex gap-1">
            <LocalDiningIcon />
            Letnie smaki
          </a>
          <ul className="flex gap-8 items-center">
            {[
              ["O projekcie", "#project"],
              ["Poznaj nas", "#about"],
              ["Dołącz teraz", "#sign-up"],
            ].map(([title, url]) => {
              return title === "Dołącz teraz" ? (
                <a
                  href={url}
                  className="px-3 py-1 rounded-xl border-2"
                  key={title}
                >
                  {title}
                </a>
              ) : (
                <a href={url} className="drop-shadow-md" key={title}>
                  {title}
                </a>
              );
            })}
          </ul>
        </nav>
      ) : (
        <nav className="flex shrink-0 justify-between px-10 py-4 font-bold items-center fixed w-full left-0 top-0 h-16 bg-white/75 z-10 backdrop-blur-sm scroll-smooth scroll-pt-[64px]">
          <a href="#header" className="flex gap-1">
            <LocalDiningIcon />
            Letnie smaki
          </a>
          <MenuIcon className="cursor-pointer" onClick={changeSetMenu} />
          {menu ? (
            <div className="fixed top-0 left-0 h-screen w-screen transition flex justify-end z-10 bg-slate-900/30">
              <div className="flex flex-col items-end bg-white w-1/2 md:w-1/3 px-10 py-4">
                <CloseIcon
                  className="cursor-pointer mb-3"
                  onClick={changeSetMenu}
                />
                <ul className="flex flex-col justify-end gap-8">
                  {[
                    ["Początek", "#header"],
                    ["O projekcie", "#project"],
                    ["Poznaj nas", "#about"],
                    ["Dołącz teraz", "#sign-up"],
                  ].map(([title, url]) => {
                    return (
                      <a
                        href={url}
                        className="drop-shadow-md text-end"
                        key={title}
                        onClick={changeSetMenu}
                      >
                        {title}
                      </a>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
        </nav>
      )}
    </>
  );
};

export default Nav;
