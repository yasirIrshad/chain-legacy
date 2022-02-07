import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cover from '../../assets/cover.png'
import bannerimage from '../../assets/bannerimage.png';
import Image from 'react-bootstrap/Image'
import ScrollAnimation from 'react-animate-on-scroll';




const Banner = ({ data }) => {
    return (
        <div className='bansection' style={{ backgroundImage: `url(${Cover})`, }}>
            <Container>
                <Row>
                    {data?.map((data, index) => {
                        return <div key={index}>
                            <Col  lg={data.description ? 6 : null} md={data.description ? 6 : null}>
                                <div className='leftbanerservtion'>
                                 {data.description?<h1 className='bheading'>{data?.title}</h1>:
                                 <h1 className="b_heading">{data?.title}</h1>}   
                                    <p className='bparagraph'>{data?.description}</p>
                                </div>


                            </Col>
                            {data.image ?
                                <Col lg={6} md={6}>
                                    <div className='rightbanersection' >
                                    <ScrollAnimation animateIn='flipInY'
                                                duration={5}
                                            >
                                        <div className='bannerImgdiv' >
                                            
                                                <Image className='bannerImg'
                                                    src={data?.image}

                                                />
                                            

                                        </div>
                                        </ScrollAnimation>
                                    </div>
                                </Col> : null}


                        </div>
                    })}
                    {/* <Col lg={6} md={12}>
                        <div className='leftbanerservtion'>
                            <h1 className='bheading'>Chain Legacy v1</h1>
                            <p className='bparagraph'>Chain Legacy is bridging the gap between past, present & future by rendering central characteristics of the Elrond NetWork in an artistic manner</p>
                        </div>


                    </Col>
                    <Col lg={6} md={12}>
                        <div className='rightbanersection' >
                            <div className='bannerImgdiv' >
                                <ScrollAnimation animateIn='flipInY'
                                    animateOut='flipOutY' duration={3}>
                                    <Image className='bannerImg'
                                        src={bannerimage}

                                    />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </Col> */}

                </Row>


            </Container>
        </div>
    )
}

export default Banner;
