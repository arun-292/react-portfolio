import About from "../About/About";
import Contacts from "../Contacts";
import Educations from "../Educations";
import Experiences from "../Experiences";
import Masthead from "../Masthead";
import Navigation from "../Navigation";
import Projects from "../Projects";
import Skills from "../Skills";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Masthead />
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <Educations />
      <Contacts />
    </>
  );
};

export default App;
