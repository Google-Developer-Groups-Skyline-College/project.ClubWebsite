import Topbar from './Components/Topbar';
import Home from './Components/Home';
import About from './Components/About';
import Tech from './Components/Tech';
import Contact from './Components/Contact';
import History from './Components/History'
import Socials from './Components/Socials';
import ProjectCarousel from './Components/Carousel';

/*

*/

function App() {
    return (
        <div>
            <Topbar/>
            <Home/>
            <About/>
            <Tech/>
            <History/>
            <Contact/>
            {/* <Socials/> */}
            <ProjectCarousel/>
        </div>
    );
}

export default App;
