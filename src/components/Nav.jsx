import LocalDiningIcon from "@mui/icons-material/LocalDining";

const Nav = () => {
  return (
    <nav className="flex shrink-0 justify-between px-10 py-4 font-bold items-center sticky top-0 mb-8 bg-white/75 z-10 backdrop-blur-sm">
      <a href="#header" className="flex gap-1">
        <LocalDiningIcon />
        Letnie smaki
      </a>
      <ul className="flex gap-8 items-center">
        {[
          ["Poznaj nas", "#about"],
          ["O projekcie", "#project"],
          ["Dołącz teraz", "#sign-up"],
        ].map(([title, url]) => {
          return title === "Dołącz teraz" ? (
            <a href={url} className="px-3 py-1 rounded-xl border-2">
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
  );
};

export default Nav;
