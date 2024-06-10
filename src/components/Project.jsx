import Flashcard from "./project/Flashcard";
import SectionHeader from "./project/SectionHeader";
import Stat from "./project/Stat";

const Project = () => {
  return (
    <div id="project" className="about-project font-mono">
      <h1 className="text-5xl font-bold text-center mb-10 p-5">
        CZYM SĄ LETNIE SMAKI?
      </h1>

      <div className="module flex md:flex-row flex-col items-center gap-10 mb-10 align-middle md:p-0 sm:p-5 p-0">
        <div className="w-1/4 md:flex flex-col justify-center hidden">
          <img
            src="patelnia.png"
            alt="obrazek patelni ze składnikami"
            className="aspect-square"
          />
        </div>

        <div className="flex flex-col md:w-3/4 w-1/1 gap-5">
          <SectionHeader text="Cel projektu" />
          <Flashcard
            text='Celem projektu "Letnia Szkoła Kulinarna" jest stworzenie inspirującej przestrzeni, gdzie studenci i młodzież mogą rozwijać swoje umiejętności kulinarne, zdobywając teoretyczną i praktyczną wiedzę z zakresu gotowania i zdrowego odżywiania.'
            bgColor="coffee-500"
          />
          <Flashcard
            text="Program stawia na naukę samodzielności w przygotowywaniu posiłków, promując współpracę zespołową i kreatywność poprzez wspólne projekty i warsztaty."
            bgColor="coffee-400"
          />
          <Flashcard
            text="Zajęcia praktyczne, warsztaty tematyczne, wykłady oraz spotkania z profesjonalnymi kucharzami i dietetykami umożliwią uczestnikom zdobycie umiejętności przydatnych w codziennym życiu i przyszłej karierze zawodowej."
            bgColor="coffee-600"
          />
        </div>
      </div>

      <div className="module flex md:flex-row flex-col items-center gap-10 mb-10 align-middle md:p-0 sm:p-5 p-0">
        <div className="flex flex-col md:w-3/4 w-1/1 gap-5">
          <SectionHeader text="Nasza historia" />
          <Flashcard
            text="Firma Maverick rozpoczęła swoją pracę 16.01.2002 roku, jako mały biznes. Zaczęło się od stworzenia grupy łączącej lokalnych amatorów gastronomii, oraz sprzedawanie swoich wyborów na miejskich i wiejskich świętach. Nie spodziewaliśmy się jednak, że nasza praca przyniesie takie owoce!"
            bgColor="coffee-400"
          />
          <Flashcard
            text="Po 6 latach ciężkiej pracy, udało nam się stworzyć sieć łączącą placówki w całej polsce. Dzięki szczerości i działaniu na zasadzie obustronnej pomocy, udało nam się rozwinąć na niespodziewaną skalę. W tym momencie, mamy kontrakty z wytwórcami produktów żywieniowych, rolnikami, cukiernikami, barmanami, szefami kuchni, i wiele, wiele więcej. Nie było łatwo, dwa razy prawie zakończyliśmy działalność, lecz nie poddaliśmy się, i parliśmy dalej. Dzięki temu, teraz możemy przekazywać nabytą wiedzę kolejnym pokoleniom."
            bgColor="coffee-500"
          />
        </div>
        <div className="w-1/4 md:flex flex-col justify-center hidden">
          <img src="talerz2.png" alt="talerz z jedzeniem" />
        </div>
      </div>

      <SectionHeader text="Nasze statystyki" />
      <div className="stats flex md:flex-row flex-col md:justify-between justify-normal md:items-stretch items-center xl:gap-20 md:gap-10 gap-5">
        <Stat
          title="ZAUFAŁO NAM..."
          number="1000"
          desc="kursantów"
          bgColor="coffee-800"
        />
        <Stat
          title="MAMY PONAD..."
          number="20"
          desc="lat doświadczenia"
          bgColor="coffee-900"
        />
        <Stat
          title="POMAGA NAM..."
          number="50"
          desc="doświadczonych kucharzy"
          bgColor="coffee-700"
        />
      </div>
    </div>
  );
};

export default Project;
