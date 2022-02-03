import './App.css';
import FooterComponent from './component/FooterComponent';
import AccordionComponent from './component/AccordionComponent';
import RoadmapComponent from './component/RoadmapComponent';
import { accordionInfo,roadMap } from './constant/Accordion'




function App() {
  return (
    <>
    <div className="roadMaoContainer">
      <RoadmapComponent  data={roadMap}/>
      </div>
      <div className="faq m-0 pb-4 text-white d-flex justify-content-center align-items-end">
      <h1>F.A.Q</h1>
      </div>
      <AccordionComponent data={accordionInfo} />
      <FooterComponent />
    </>

  );
}

export default App;
