import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import NavBar from "./ui/NavBar.jsx"
import Footer from "./ui/Footer.jsx";
import Header from "./ui/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
    return (
        <div className="app-container">
            <NavBar links={['Home', 'About', 'Contact', 'Projects']}/>
            <Header title="Joel Williams"/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>


            <Footer/>
        </div>


    );

}

export default App;
