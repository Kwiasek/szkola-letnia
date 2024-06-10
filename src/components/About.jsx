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
      position: "Kucharz",
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

      <div className="flex flex-col xl:flex-row my-5 md:p-10 p-5 justify-between gap-8 h-max shrink bg-coffee-800 text-white rounded-xl border-black border-2">
        <img
          src="close-up-woman-hand-put-topping-homemade-pizza.jpg"
          className="rounded-xl max-w-max xl:max-w-md aspect-auto shrink"
        />
        <div className="">
          <h2 className="text-4xl text-center font-bold pb-4">Nasz zespół</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tempus urna massa, sed pellentesque lectus lacinia sit amet. Etiam
            in eros non ex iaculis vehicula eget nec urna. Cras sed convallis
            mi. Donec ornare volutpat vestibulum. Nulla facilisis sodales metus
            nec rhoncus. Sed nibh augue, commodo ut sapien elementum,
            sollicitudin ultrices nulla. Aenean accumsan neque lorem,
            condimentum pretium lectus scelerisque nec. Curabitur suscipit
            aliquam fermentum. Sed congue ante at magna pharetra, sed
            sollicitudin nulla eleifend. Nulla quis enim nec erat tempor
            vulputate sit amet in massa. Mauris vestibulum iaculis nibh, ac
            auctor eros posuere eget. Suspendisse posuere magna a orci faucibus
            euismod. Donec augue diam, tincidunt in tincidunt vel, aliquet at
            neque. Donec aliquet egestas imperdiet. Sed euismod ut nulla ac
            ultricies.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row gap-5 md:gap-10 lg:mt-20 items-center justify-center flex-wrap">
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
