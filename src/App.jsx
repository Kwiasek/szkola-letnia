import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Form from "./components/Form";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="w-screen">
      <div id="alert" className="hidden">
        <Alert />
      </div>

      <div className="flex flex-col">
        <Nav />
        <Header />
        <main className="xl:w-3/4 lg:w-4/5 w-screen md:mx-auto scroll-smooth">
          <Project />
          <About />
          <Form />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
