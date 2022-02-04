import React from 'react';
import HeaderComponent from '../../component/HeaderComponent';
import Banner from '../../component/BannerComponent';
import RoadmapComponent from '../../component/RoadmapComponent';
import FooterComponent from '../../component/FooterComponent';
import { roadMap } from '../../constant/Accordion';

function RoadmapPage() {

    return <>
    <HeaderComponent />
        <Banner /><div className="roadMaoContainer">
            <h1 className="text-white text-center mb-5">Chain Legacy Roadmap</h1>
            <RoadmapComponent data={roadMap} />
            <FooterComponent />
        </div>
    </>;
}

export default RoadmapPage;