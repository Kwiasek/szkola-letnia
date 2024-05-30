import Flashcard from "./project/Flashcard";
import SectionHeader from "./project/SectionHeader";
import Stat from "./project/Stat";

const Project = () => {
  return (
    <div id="about" className="about-project font-mono">
      <h1 className="text-5xl font-bold text-center mb-10">
        CZYM SĄ LETNIE SMAKI?
      </h1>

      <div className="module flex gap-10 mb-10 align-middle">
        <div className="w-1/4 flex flex-col justify-center">
          <img
            src="patelnia.png"
            alt="obrazek patelni ze składnikami"
            className="aspect-square"
          />
        </div>

        <div className="flex flex-col w-3/4 gap-5">
          <SectionHeader text="Cel projektu" />
          <Flashcard
            text='Celem projektu "Letnia Szkoła Kulinarna" jest stworzenie inspirującej przestrzeni, gdzie studenci i młodzież mogą rozwijać swoje umiejętności kulinarne, zdobywając teoretyczną i praktyczną wiedzę z zakresu gotowania i zdrowego odżywiania.'
            bgColor="coffee-600"
          />
          <Flashcard
            text="Program stawia na naukę samodzielności w przygotowywaniu posiłków, promując współpracę zespołową i kreatywność poprzez wspólne projekty i warsztaty."
            bgColor="coffee-200"
          />
          <Flashcard
            text="Zajęcia praktyczne, warsztaty tematyczne, wykłady oraz spotkania z profesjonalnymi kucharzami i dietetykami umożliwią uczestnikom zdobycie umiejętności przydatnych w codziennym życiu i przyszłej karierze zawodowej."
            bgColor="coffee-400"
          />
        </div>
      </div>

      <div className="module flex gap-10 mb-10 align-middle">
        <div className="flex flex-col w-3/4 gap-5">
          <SectionHeader text="Nasza historia" />
          <Flashcard
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, architecto! Facilis, commodi? Nemo incidunt excepturi accusamus itaque veniam repellat autem nisi? Fugiat, architecto accusamus nemo qui odio vel, rerum veniam quis deleniti nam, maxime quasi!"
            bgColor="coffee-400"
          />
          <Flashcard
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, quos nobis sit minima fugit, tempora minus consequatur debitis voluptate obcaecati reiciendis vero tempore repellendus assumenda a sint, magnam repellat maiores."
            bgColor="coffee-600"
          />
        </div>
        <div className="w-1/4 flex flex-col justify-center">
          <img src="talerz2.png" alt="talerz z jedzeniem" />
        </div>
      </div>

      <SectionHeader text="Nasze statystyki" />
      <div className="stats flex justify-between gap-20">
        <Stat
          title="ZAUFAŁO NAM..."
          number="10.000+"
          desc="kursantów"
          bgColor="coffee-400"
        />
        <Stat
          title="MAMY PONAD..."
          number="20"
          desc="lat doświadczenia"
          bgColor="coffee-200"
        />
        <Stat
          title="POMAGA NAM..."
          number="50+"
          desc="doświadczonych kucharzy"
          bgColor="coffee-600"
        />
      </div>
    </div>
  );
};

export default Project;
