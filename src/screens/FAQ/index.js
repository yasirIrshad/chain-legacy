import React from 'react';
import AccordionComponent from '../../component/AccordionComponent';
import Banner from '../../component/BannerComponent';
import FooterComponent from '../../component/FooterComponent';
import HeaderComponent from '../../component/HeaderComponent';
import { accordionInfo } from '../../constant/Accordion';
import ScrollToTopOnMount from '../../scroll';
const hed = [
    {

        title: "FAQ",

    },
]




function FaqPage() {

    return <>
        <ScrollToTopOnMount />
        <HeaderComponent />
        <Banner data={hed} />

        <div className="containerFAQ">

            <h1 className="text-white mt-5">F.A.Q</h1>
            <AccordionComponent data={accordionInfo} />
            <FooterComponent />
        </div>

    </>
        ;
}

export default FaqPage;
