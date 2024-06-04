import Flashcard from "./project/Flashcard";
import SectionHeader from "./project/SectionHeader";
import Stat from "./project/Stat";

const Project = () => {
  return (
    <div id="project" className="about-project font-mono">
      <h1 className="text-5xl font-bold text-center mb-10">
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
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, architecto! Facilis, commodi? Nemo incidunt excepturi accusamus itaque veniam repellat autem nisi? Fugiat, architecto accusamus nemo qui odio vel, rerum veniam quis deleniti nam, maxime quasi!"
            bgColor="coffee-400"
          />
          <Flashcard
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, quos nobis sit minima fugit, tempora minus consequatur debitis voluptate obcaecati reiciendis vero tempore repellendus assumenda a sint, magnam repellat maiores."
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
