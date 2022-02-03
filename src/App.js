import React from 'react';
import HeaderComponent from './component/HeaderComponent'
import Banner from './component/BannerComponent';
import Introduction from './component/introduction';
import FooterComponent from './component/FooterComponent';
import AccordionComponent from './component/AccordionComponent';
import RoadmapComponent from './component/RoadmapComponent';
import { accordionInfo,roadMap } from './constant/Accordion'

const App = () => {
  return (
    <>
      <HeaderComponent />
      <Banner />
      <Introduction />
      <div className="roadMaoContainer">
        <RoadmapComponent data={roadMap} />
      </div>
      <div className="faq m-0 pb-4 text-white d-flex justify-content-center align-items-end">
        <h1>F.A.Q</h1>
      </div>
      <AccordionComponent data={accordionInfo} />
      <FooterComponent />

    </>
  )
}

export default App
