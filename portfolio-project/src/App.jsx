import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./ui/Footer";

function App(){
  return(
    <div className="app-container">
      <Header title="Joel Williams"/>
      <NavBar links={['Home', 'About', 'Contact', 'Projects']}/>


      <Footer/>
    </div>
    

  );

}

export default App;
