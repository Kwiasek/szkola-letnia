import PersonCard from "./about/PersonCard";
import SectionHeader from "./project/SectionHeader";

const About = () => {
  return (
    <div id="about" className="my-10 w-3/4 md:w-full mx-auto">
      <SectionHeader text={"O nas"} />

      <div className="flex flex-col lg:flex-row my-5 py-10 justify-between gap-8 px-10 h-max shrink bg-coffee-800 text-white rounded-xl border-black border-2">
        <img
          src="close-up-woman-hand-put-topping-homemade-pizza.jpg"
          className="rounded-xl max-w-max lg:max-w-md aspect-auto shrink"
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
        <PersonCard
          name="Gordon Ramsey"
          position="Kucharz"
          img="Gordon-Ramsay.webp"
          text="Lorem ipsum asdasjkdhahjklsbdasd"
          bgColor={"coffee-600"}
        />
        <PersonCard
          name="Gordon Ramsey"
          position="Kucharz"
          img="Gordon-Ramsay.webp"
          text="Lorem ipsum asdasjkdhahjklsbdasd"
          height={530}
          bgColor={"coffee-800"}
        />
        <PersonCard
          name="Gordon Ramsey"
          position="Kucharz"
          img="Gordon-Ramsay.webp"
          text="Lorem ipsum asdasjkdhahjklsbdasd"
          bgColor={"coffee-600"}
        />
      </div>
    </div>
  );
};

export default About;
