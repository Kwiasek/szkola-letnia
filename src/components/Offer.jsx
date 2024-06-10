import SectionHeader from "./project/SectionHeader";

const Offer = () => {
  return (
    <section>
      <SectionHeader text="Nasza oferta" />
      <div className="bg-coffee-400 border-2 border-coffee-600 rounded-xl p-5">
        <p className="leading-7 indent-5 tracking-wide">
          Szukasz okazji do podszlifowania swoich umiejętności, lub znajomych,
          którzy dzielą twoją pasję? A może chcesz dopiero zacząć przygodę z
          gotowaniem? W takim razie, nasza szkoła letnia jest wprost stworzona
          dla ciebie! Będziesz miał/a okazję wybierać między dziedzinami które
          cię interesują ( barmaństwo, gotowanie, cukiernictwo). Na samym
          początku podzielimy was na grupy względem obycia z kuchnią, aby każdy
          dobrze się wpasował. Osoby, które nie miały wcześniej doczynienia z
          kuchnią, nauczą się podstaw pod okiem wyrozumiałych prowadzących.
          Uczestnicy, którzy mieli już z tematem styczność, będą mieli okazję
          spróbować swoich sił w prawdziwej restauracji, i próbować nowych
          przepisów. Osoby z dużym poziomem zaawansowania, po wstępnym
          przygotowaniu, zostaną wysłane pod opieką mentorów do bardziej znanych
          restauracji, oraz nauczą się pracy pod presją czasu i stresu. Jeśli
          dobrze się sprawdzicie, będziecie mieli szansę zaproponować szefowi
          kuchni swój własny przepis! Grunt to dobra zabawa, i wyciągnięcie z
          kursu tyle, ile tylko się da.
        </p>
        <br />
        <p className="font-bold">
          Szkoła letnia jest finansowana z funduszy Ministerstwa Rozwoju i
          Technologii, więc udział w niej jest darmowy.
        </p>
        <br />
        <p>Kategorie wiekowe:</p>
        <ul className="list-disc pl-8 leading-8">
          <li>16 - 18 lat</li>
          <li>19 - 21 lat</li>
          <li>22 - 24 lata</li>
        </ul>
        <br />
        <p>Terminy:</p>
        <ul className="list-disc pl-8 leading-8">
          <li>Czerwiec (1 - 22)</li>
          <li>Lipiec (5 - 27)</li>
          <li>Sierpień (3 - 24)</li>
        </ul>
      </div>
    </section>
  );
};

export default Offer;
