const Nav = () => {
  return (
    <nav className="flex justify-between px-10 py-4 bg-green-800 font-bold text-orange items-center sticky top-0">
      <a href="#logo">Logo</a>
      <ul className="flex gap-8 items-center">
        <li>Poznaj nas</li>
        <li>O projekcie</li>
        <li className="bg-orange text-green-800 px-3 py-2 rounded-md">
          Dołącz teraz
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
