import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const Footer = () => {
  return (
    <footer className="bg-coffee-800 text-coffee-200 2xl:p-20 lg:p-10 md:p-5 p-10 flex lg:flex-row md:flex-row flex-col justify-between lg:gap-10 mt-10">
      <div className="md:w-1/3 sm:w-1/1 md:mb-0 mb-10">
        <div className="flex gap-1">
          <LocalDiningIcon />
          <h3 className="text-2xl mb-5">Letnie smaki</h3>
        </div>
        <p className="text-sm text-coffee-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et magnam
          cum fugit repellat recusandae repellendus sed culpa deleniti eligendi
          soluta excepturi facilis quas harum alias nobis placeat hic ratione
          voluptatem natus aut similique, autem dolorem?
        </p>
      </div>

      <div className="flex flex-col md:w-1/6 sm:w-1/1 text-coffee-400 md:mb-0 mb-10">
        <h4 className="text-xl mb-5 text-coffee-200">Zawartość</h4>
        <div className="flex md:flex-col flex-row md:gap-2 gap-10">
          <a href="#about" className="hover:text-coffee-200 max-w-max">
            Poznaj nas
          </a>
          <a href="#project" className="hover:text-coffee-200 max-w-max">
            O projekcie
          </a>
          <a href="#sign-up" className="hover:text-coffee-200 max-w-max">
            Dołącz teraz
          </a>
        </div>
      </div>

      <div className="flex flex-col md:w-1/6 sm:w-1/1 md:mb-0 mb-10">
        <h4 className="text-xl mb-5">Kontakt</h4>
        <div className="flex md:flex-col flex-row md:gap-3 gap-10">
          <p className="text-coffee-400 flex md:flex-col flex-row md:gap-0 gap-2">
            Email: <span>kontakt@letniesmaki.pl</span>
          </p>
          <p className="text-coffee-400 flex md:flex-col flex-row md:gap-0 gap-2">Telefon: <span>123 321 123</span></p>
        </div>
      </div>

      <div className="md:w-1/6 sm:w-1/1 flex flex-col mb-2">
        <h4 className="text-xl mb-5">Social Media</h4>
        <div className="flex md:flex-col flex-row md:gap-2 gap-10">
          <a
            href=""
            className="flex gap-1 text-coffee-400 hover:text-pink-300 transition max-w-max"
          >
            <InstagramIcon />
            <p>Instagram</p>
          </a>
          <a
            href=""
            className="flex gap-1 text-coffee-400 hover:text-blue-400 transition max-w-max"
          >
            <FacebookIcon />
            <p>Facebook</p>
          </a>
          <a
            href=""
            className="flex gap-1 text-coffee-400 hover:text-red-400 transition max-w-max"
          >
            <YouTubeIcon />
            <p>Youtube</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
