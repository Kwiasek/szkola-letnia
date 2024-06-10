import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const Footer = () => {
  return (
    <footer className="bg-coffee-800 text-coffee-100 2xl:p-20 lg:p-10 md:p-5 p-7 flex lg:flex-row md:flex-row flex-col justify-between lg:gap-10 mt-10">
      <div className="md:w-1/3 sm:w-1/1 md:mb-0 mb-10">
        <div className="flex gap-1 hover:text-white transition">
          <LocalDiningIcon />
          <h3 className="text-2xl mb-5">
            <a href="#">Letnie smaki</a>
          </h3>
        </div>
        <p className="text-sm text-coffee-400 leading-5">
          Prowadzący:
          <ul className="pl-1">
            <li>Andrzej Pokora</li>
            <li>Agnieszka Miraj</li>
            <li>Michał Podborowski</li> <li>Maciej Mazur</li>
            <li>Henryk Fiał</li>
            <li>Piotr Dowbor</li>
          </ul>
        </p>
      </div>

      <div className="flex flex-col md:w-1/6 sm:w-1/1 text-coffee-400 md:mb-0 mb-10">
        <h4 className="text-xl mb-5 text-coffee-200">Zawartość</h4>
        <div className="flex md:flex-col sm:flex-row flex-col md:gap-2 gap-5">
          <a
            href="#about"
            className="hover:text-coffee-200 focus:text-coffee-200 max-w-max transition"
          >
            Poznaj nas
          </a>
          <a
            href="#project"
            className="hover:text-coffee-200 focus:text-coffee-200 max-w-max transition"
          >
            O projekcie
          </a>
          <a
            href="#sign-up"
            className="hover:text-coffee-200 focus:text-coffee-200 max-w-max transition"
          >
            Dołącz teraz
          </a>
        </div>
      </div>

      <div className="flex flex-col md:w-1/6 sm:w-1/1 md:mb-0 mb-10">
        <h4 className="text-xl mb-5">Kontakt</h4>
        <div className="flex md:flex-col sm:flex-row flex-col md:gap-3 gap-10">
          <p className="text-coffee-400 flex flex-col md:gap-0 gap-2">
            Email: <span>kontakt@letniesmaki.pl</span>
          </p>
          <p className="text-coffee-400 flex flex-col md:gap-0 gap-2">
            Telefon: <span>123 321 123</span>
          </p>
        </div>
      </div>

      <div className="md:w-1/6 sm:w-1/1 flex flex-col mb-2">
        <h4 className="text-xl mb-5">Social Media</h4>
        <div className="flex md:flex-col sm:flex-row flex-col md:gap-2 gap-5">
          <a
            href="https://www.instagram.com/gordongram/"
            target="_blank"
            className="flex gap-1 text-coffee-400 hover:text-pink-300 focus:text-pink-300 transition max-w-max"
          >
            <InstagramIcon />
            <p>Instagram</p>
          </a>
          <a
            href="https://www.facebook.com/gordonramsay/?locale=pl_PL"
            target="_blank"
            className="flex gap-1 text-coffee-400 hover:text-blue-400 focus:text-blue-400 transition max-w-max"
          >
            <FacebookIcon />
            <p>Facebook</p>
          </a>
          <a
            href="https://www.youtube.com/@gordonramsay/videos"
            target="_blank"
            className="flex gap-1 text-coffee-400 hover:text-red-400 focus:text-red-400 transition max-w-max"
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
