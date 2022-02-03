import React from 'react';
import { Accordion } from 'react-bootstrap';

function AccordionComponent({data}) {

    return <div className="container-fluid accordionBackground d-flex justify-content-center pb-5">
        <div className="w-75 mb-5">
        <Accordion  >
        {data?.map((data,index)=>{
          return  <Accordion.Item eventKey={index} className="bg-transparent mb-4 border-0" >
                    <Accordion.Header className="accordionHeader">{data?.title}</Accordion.Header>
                    <Accordion.Body className="text-white text-center description">
                       {data?.description}
                    </Accordion.Body>
                </Accordion.Item>
        })}
        </Accordion>
        </div>
    </div>;
}

export default AccordionComponent;
