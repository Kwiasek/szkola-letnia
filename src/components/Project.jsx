const Project = () => {
  return (
    <div className="about-project">
      <h1 className="text-6xl font-bold text-center mb-10">
        CZYM SĄ LETNIE SMAKI?
      </h1>

      <div className="module flex gap-20 mb-10 h-[35vh]">
        <img
          src="patelnia.png"
          alt="obrazek patelni ze składnikami"
          className="aspect-square"
        />
        <div div className="info w-3/4 bg-coffee-400 rounded-2xl p-5">
          <h2 className="text-3xl text-center font-bold pb-3">Cel projektu</h2>
          <p className="text-lg pb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            molestias modi obcaecati expedita, omnis fuga ipsum quos nam?
            Aspernatur cum consectetur cupiditate ullam placeat quam et facilis
            odit aliquid? Aliquid, facere. Culpa accusantium ea atque tenetur,
            obcaecati inventore facilis odio aut eveniet, fuga at hic nemo vero,
            dolorum minus pariatur itaque ab aliquid distinctio ipsa non
            possimus. Saepe, officia ipsa?
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            nemo soluta. Sequi non dolores quaerat voluptatem, esse nisi
            asperiores, laboriosam, aperiam aliquam repellendus eius! Libero
            quod alias fugiat dolorem, recusandae incidunt repudiandae
            obcaecati! Atque sint autem delectus quidem illo, aspernatur aliquam
            culpa quo dolorum, consequatur harum error fuga voluptate vel?
          </p>
        </div>
      </div>

      <div className="module flex gap-20 mb-10 h-[35vh]">
        <div div className="info w-3/4 bg-coffee-200 rounded-2xl p-5">
          <h2 className="text-3xl text-center font-bold pb-3">
            Nasza historia
          </h2>
          <p className="text-lg pb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            molestias modi obcaecati expedita, omnis fuga ipsum quos nam?
            Aspernatur cum consectetur cupiditate ullam placeat quam et facilis
            odit aliquid? Aliquid, facere. Culpa accusantium ea atque tenetur,
            obcaecati inventore facilis odio aut eveniet, fuga at hic nemo vero,
            dolorum minus pariatur itaque ab aliquid distinctio ipsa non
            possimus. Saepe, officia ipsa?
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            nemo soluta. Sequi non dolores quaerat voluptatem, esse nisi
            asperiores, laboriosam, aperiam aliquam repellendus eius! Libero
            quod alias fugiat dolorem, recusandae incidunt repudiandae
            obcaecati! Atque sint autem delectus quidem illo, aspernatur aliquam
            culpa quo dolorum, consequatur harum error fuga voluptate vel?
          </p>
        </div>
        <img
          src="talerz2.png"
          alt="obrazek patelni ze składnikami"
          className="w-1/4"
        />
      </div>

      <div className="stats flex justify-between gap-20">
        <div className="stat w-1/3 bg-coffee-400 rounded-2xl p-5 text-center font-bold">
          <h3 className="text-3xl pb-5">ZAUFAŁO NAM...</h3>
          <p className="text-5xl pb-5">10.000+</p>
          <p className="font-normal text-2xl">kursantów</p>
        </div>
        <div className="stat w-1/3 bg-coffee-200 rounded-2xl p-5 text-center font-bold">
          <h3 className="text-3xl pb-5">MAMY PONAD</h3>
          <p className="text-5xl pb-5">20</p>
          <p className="font-normal text-2xl">lat doświadczenia</p>
        </div>
        <div className="stat w-1/3 bg-coffee-600 rounded-2xl p-5 text-center font-bold">
          <h3 className="text-3xl pb-5">POMAGA NAM...</h3>
          <p className="text-5xl pb-5">50+</p>
          <p className="font-normal text-2xl">doświadczonych kucharzy</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
