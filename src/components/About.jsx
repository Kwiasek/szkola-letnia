import PersonCard from "./about/PersonCard";
import SectionHeader from "./project/SectionHeader";

const About = () => {
  const peoples = [
    {
      name: "Karol Okrasa",
      img: "okrasa.jpg",
      position: "Kucharz",
      desc: 'Szefuje warszawskiej restauracji "Platter", oraz jest jednym z najzdolniejszych i najbardziej rozpoznawalnych polskich szefów kuchni.',
      imgPosition: "30%",
    },
    {
      name: "Maciej Mazur",
      img: "mazur.jpg",
      position: "Barman",
      desc: "Zajął 15 lokatę w  World Class Competition (najlepszy wynik reprezentanta Polski). Barman,  jest menedżerem baru w lokalu typu „speakeasy”.",
      imgPosition: "100%",
    },
    {
      name: "Katarzyna Rogowska",
      img: "rogowska.jpg",
      position: "Kucharka",
      desc: "Reinterpretuje kuchnię śląską, podając ją w zupełnie nowej, finediningowej formie. Z zawodu artystka-plastyk, udowadnia, że oszczędność na talerzu nie oznacza braku smaku.",
      imgPosition: "55%",
    },
  ];

  return (
    <div id="about" className="my-10 w-full mx-auto">
      <SectionHeader text={"O nas"} />

      <div className="flex flex-col xl:flex-row my-5 md:p-10 p-5 justify-between gap-8 h-max shrink bg-coffee-800 text-white rounded-xl border-coffee-900 border-2">
        <img
          src="close-up-woman-hand-put-topping-homemade-pizza.jpg"
          className="rounded-xl max-w-max xl:max-w-md aspect-auto shrink"
        />
        <div className="flex flex-col gap-4 indent-5 tracking-wide leading-6">
          <h2 className="text-4xl text-center font-bold pb-4">Nasz zespół</h2>
          <p>
            <b>Anna Zdabacz</b> - team leaderka &quot;zespołu ds.
            słodyczy&quot;, pasjonatka cukiernictwa, artystka. Wszystko co się
            świeci lub jest ładnie udekorowane jest bliskie jej sercu. Ma ponad
            25 lat doświadczenia w branży, lauretka nagród Golden Plate (1991)
            oraz Spice Stack (2005). Niezrównana w swoim polu.
          </p>
          <p>
            <b>Michał Podborowski</b> - leader działów logistyka oraz finanse,
            dzięki niemu byliśmy w stanie wspiąć się tak wysoko. Najlepszy i
            najbardziej uczciwy handlarz jakiego znam, jego sieć kontaktów
            rozciąga się jeszcze dalej niż moja. Jeden z mentorów w szkole
            letniej.
          </p>
          <p>
            <b>Agnieszka Miraj</b> - znana szefowa kuchni, partnerka biznesowa
            Magdy Gessler. Jest z nami od początku istnienia firmy, jest jednym
            z jej filarów. Jej potrawy są uznawane przez wielu za
            &quot;szczytowa forma sztuki w prostocie&quot;. Niezastąpiona w
            swojej roli, pomogła setkom młodych kucharzy i kucharek rozwinąć
            skrzydła, nie tylko w dziedzinie gastronomii.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row gap-5 md:gap-10 lg:mt-20 items-stretch justify-center flex-wrap">
        {peoples.map((person) => {
          return (
            <PersonCard
              key={person.name}
              name={person.name}
              position={person.position}
              img={person.img}
              text={person.desc}
              bgColor={"coffee-600"}
              imgPosition={person.imgPosition}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;
