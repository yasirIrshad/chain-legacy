import React from 'react';
import HeaderComponent from '../../component/HeaderComponent/index'
import Banner from '../../component/BannerComponent/index';
import Introduction from '../../component/introduction/index';
import FooterComponent from '../../component/FooterComponent/index';
import AccordionComponent from '../../component/AccordionComponent/index';
import RoadmapComponent from '../../component/RoadmapComponent/index';
import { accordionInfo, roadMap } from '../../constant/Accordion/index'
import bannerimage from '../../assets/bannerimage.png'

const heading = [
    {

        title: "Chain Legacy v1",
        description: "Chain Legacy is bridging the gap between past, present & future by rendering central characteristics of the Elrond NetWork in an artistic manner",
        image: bannerimage
    },
]

const HomeScreen = () => {
    return (<>
        <HeaderComponent />
        <Banner data={heading} />
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

export default HomeScreen
