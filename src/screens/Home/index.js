import React from 'react';
import HeaderComponent from '../../component/HeaderComponent/index'
import Banner from '../../component/BannerComponent/index';
import Introduction from '../../component/introduction/index';
import FooterComponent from '../../component/FooterComponent/index';
import AccordionComponent from '../../component/AccordionComponent/index';
import RoadmapComponent from '../../component/RoadmapComponent/index';
import { accordionInfo, roadMap } from '../../constant/Accordion/index'
import bannerimage from '../../assets/bannerimage.png'
import ScrollToTopOnMount from '../../scroll';
const heading = [
    {

        title: "Chain Legacy v1",
        description: "Chain Legacy is bridging the gap between past, present & future by rendering central characteristics of the Elrond NetWork in an artistic manner",
        image: bannerimage
    },
]

const HomeScreen = () => {
    return (<>
        <ScrollToTopOnMount />
        <HeaderComponent />
        <Banner data={heading} />
        <Introduction />
        <div className="roadMaoContainer">
            <h1 className="text-white text-center mb-5">Chain Legacy Roadmap</h1>
            <RoadmapComponent data={roadMap} />
        </div>
        <div className="containerFAQ">
            <h1 className="text-white mt-5">F.A.Q</h1>
            <AccordionComponent data={accordionInfo} />
            <FooterComponent />
        </div>
    </>
    )
}

export default HomeScreen
