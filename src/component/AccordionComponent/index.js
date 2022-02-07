import React from 'react';
import { Accordion } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

function AccordionComponent({ data }) {

    return <div className="container-fluid d-flex justify-content-center py-5">
        <div className="w-75 mb-5">
            <Accordion  >
           
                {data?.map((data, index) => {
                    return  <ScrollAnimation key={index} animateIn='fadeIn' duration={3}>
                    <Accordion.Item eventKey={index} className="bg-transparent mb-4 border-0" >
                        <Accordion.Header className="accordionHeader text-uppercase">
                           
                                {data?.title}
                        
                        </Accordion.Header>
                        <Accordion.Body className="text-white text-center description px-5">
                            {data?.description}
                        </Accordion.Body>
                    </Accordion.Item> </ScrollAnimation> 
                })}
                  </Accordion>
        </div>
    </div>
}

export default AccordionComponent;
