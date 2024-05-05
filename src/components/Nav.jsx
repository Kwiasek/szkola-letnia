import LocalDiningIcon from "@mui/icons-material/LocalDining";

const Nav = () => {
  return (
    <nav className="flex shrink-0 justify-between px-8 py-3 bg-green-800 font-bold text-orange items-center sticky top-0">
      <a href="#header" className="drop-shadow-md flex gap-1">
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
            <a
              href={url}
              className="bg-orange text-green-800 px-3 py-1 rounded-lg"
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
  );
};

export default Nav;
