import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Form from "./components/Form";
import Alert from "./Alert";
import About from "./components/About";

function App() {
  return (
    <div>
      <div id="alert" className="hidden">
        <Alert />
      </div>

      <div className="flex flex-col">
        <Nav />
        <main className="w-3/4 md:mx-auto md:container scroll-smooth">
          <Header />
          <Project />
          <About />
          <Form />
        </main>
      </div>
    </div>
  );
}

export default App;
