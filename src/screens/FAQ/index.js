import React from 'react';
import AccordionComponent from '../../component/AccordionComponent';
import FooterComponent from '../../component/FooterComponent';
import { accordionInfo } from '../../constant/Accordion';
;



function FaqPage() {
    return <div className="containerFAQ">
        <h1 className="text-white mt-5">F.A.Q</h1>
        <AccordionComponent data={accordionInfo} />
        <FooterComponent />
    </div>;
}

export default FaqPage;
