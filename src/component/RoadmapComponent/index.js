import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

function RoadmapComponent({ data }) {


    return <div>
        <Container className="w-75 pt-5">
          
                {data.map((data, index) => {
                    if (index % 2 == 0) {
                        return  <Row key={index}>
                        <Col xs={12} md={6} className="borderRight">
                            <div className="borderBottom mx-3" >
                                <h6 className="roadMapDate">{data.date}</h6>
                                <ScrollAnimation animateIn='fadeIn'>    <h5 className="text-white text-uppercase">"{data.title}"</h5></ScrollAnimation>
                            </div>
                            <div className="p-3 position-relative" >
                                <div className="d-flex justify-content-center align-items-center my-4 m-md-0 boxEven boxSquare">
                                    <div className="boxText">0{index + 1}</div>
                                </div>
                                <ScrollAnimation animateIn='fadeIn'>      <p className="roadMapDesc mt-4 text-white">{data.description}</p></ScrollAnimation>
                            </div>
                        </Col>
                            <Col xs={0} md={6} className="d-md-block d-none">

                            </Col>
                            </Row>
                    }
                    else {
                        return <Row key={index}>
                            <Col xs={0} md={6} className="d-md-block d-none borderRight" key={index}>

                            </Col>
                            <Col xs={12} md={6}  >
                                <div className="px-5 borderBottom">
                                    <h6 className="roadMapDate">{data.date}</h6>
                                    <ScrollAnimation animateIn='fadeIn'> <h5 className="text-white text-uppercase">"{data.title}"</h5></ScrollAnimation>
                                </div>
                                <div className="p-3 position-relative" >
                                    <div className="d-flex justify-content-center align-items-center my-4 m-md-0 boxOdd boxSquare">
                                        <div className="boxText">0{index + 1}</div>
                                    </div>
                                    <ScrollAnimation animateIn='fadeIn'> <p className="roadMapDesc mt-4 text-white mx-4 pl-2">{data.description}</p></ScrollAnimation>
                                </div>
                            </Col>
                            </Row>
                    }

                })}

         
        </Container>
    </div>;
}

export default RoadmapComponent;
