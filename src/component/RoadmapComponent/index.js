import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function RoadmapComponent({ data }) {


    return <div>
        <Container className="w-75 py-5">
            <Row>
                {data.map((data, index) => {
                    if (index % 2 == 0) {
                        return <><Col xs={12} md={6} className="borderRight">
                            <div className="borderBottom mx-3" >
                                <h6 className="text-info">{data.date}</h6>
                                <h5 className="text-white text-uppercase">"{data.title}"</h5>
                            </div>
                            <div className="p-3 position-relative" >
                                <div className="d-flex justify-content-center align-items-center my-4 m-md-0 boxEven boxSquare">
                                    <div className="boxText">0{index + 1}</div>
                                </div>
                                <p className="roadMapDesc text-white">{data.description}</p>
                            </div>
                        </Col>
                            <Col xs={0} md={6} className="d-md-block d-none">

                            </Col>
                        </>
                    }
                    else {
                        return <>
                            <Col xs={0} md={6} className="d-md-block d-none borderRight">

                            </Col>
                            <Col xs={12} md={6}  >
                                <div className="px-5 borderBottom">
                                    <h6 className="text-info">{data.date}</h6>
                                    <h5 className="text-white text-uppercase">"{data.title}"</h5>
                                </div>
                                <div className="p-3 position-relative" >
                                    <div className="d-flex justify-content-center align-items-center my-4 m-md-0 boxOdd boxSquare">
                                        <div className="boxText">0{index + 1}</div>
                                    </div>
                                    <p className="roadMapDesc text-white mx-4 pl-2">{data.description}</p>
                                </div>
                            </Col>
                        </>
                    }

                })}

            </Row>
        </Container>
    </div>;
}

export default RoadmapComponent;
