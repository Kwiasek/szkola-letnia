import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Form from "./components/Form";

function App() {
  return (
    <div className="flex flex-col">
      <Nav />
      <main className="w-3/4 md:mx-auto md:container">
        {/* <Header /> */}
        <Project/>
        <div className="flex flex-row gap-5 mt-5">
          <div className="w-3/4 h-[300px] bg-orange rounded-lg">asd</div>
          <div className="w-3/4 h-[400px] bg-hero rounded-lg bg-cover bg-no-repeat bg-center">
            asd
          </div>
        </div>
        <Form/>
      </main>
    </div>
  );
}

export default App;
