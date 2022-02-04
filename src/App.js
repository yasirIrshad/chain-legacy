import React from 'react';
import HeaderComponent from './component/HeaderComponent'
import Banner from './component/BannerComponent';
import Introduction from './component/introduction';
import FooterComponent from './component/FooterComponent';
import AccordionComponent from './component/AccordionComponent';
import RoadmapComponent from './component/RoadmapComponent';
import { accordionInfo,roadMap } from './constant/Accordion'
import FaqPage from './screens/FAQ';
import RoadmapPage from './screens/Roadmap';
import HomeScreen from './screens/Home';
import Introductionpage from './screens/Introduction';

const App = () => {

  return (
    <>
      {/* <HeaderComponent />
      <Banner />
      <Introduction />
      <div className="roadMaoContainer">
      <h1 className="text-white text-center mb-5">Chain Legacy Roadmap</h1>
        <RoadmapComponent data={roadMap} />
      </div>
      <div className="containerFAQ">
        <h1 className="text-white mt-5">F.A.Q</h1>
        <AccordionComponent data={accordionInfo} />
        <FooterComponent/>
      </div> */}
      
      {/* <FaqPage/> */}
      <RoadmapPage/>
      <Introductionpage />

    </>
  )
}

export default App
