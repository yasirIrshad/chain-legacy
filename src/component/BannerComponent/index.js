import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cover from '../../assets/cover.png'
import bannerimage from '../../assets/bannerimage.png';
import Image from 'react-bootstrap/Image'
const Banner = () => {
    return (
        <div className='bansection' style={{ backgroundImage: `url(${Cover})`, }}>
            <Container>
                <Row>
                    <Col lg={6} md={12}>
                        <div className='leftbanerservtion'>
                            <h1 className='bheading'>Chain Legacy v1</h1>
                            <p className='bparagraph'>Chain Legacy is bridging the gap between past, present & future by rendering central characteristics of the Elrond NetWork in an artistic manner</p>
                        </div>


                    </Col>
                    <Col lg={6} md={12}>
                        <div className='rightbanersection' >
                            <div className='bannerImgdiv' >
                                <Image className='bannerImg'
                                    src={bannerimage}
                                />
                            </div>
                        </div>
                    </Col>

                </Row>


            </Container>
        </div>
    )
}

export default Banner;
