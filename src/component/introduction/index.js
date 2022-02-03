import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import trio from '../../assets/trio.png';

const Introduction = () => {
    return (
        <div className='introduction'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='introleftsection'>

                            <Image
                                src={trio}
                            />
                        </div>

                    </Col>

                    <Col lg={6}>
                        <div className='introrightsection'>
                            <h1 className='Iheading'>Introduction</h1>
                            <p className='Iparagraph'>Chain Legacy is a collection of Non-fungible-tokens (NFTs) for the Internet-Scale blockchain. Our goal is to enhance the legacy of the Elrond blockchain by creating meaningful and high quality pieces of digital art.</p>

                        </div>
                    </Col>
                </Row>
                <Row class="intrRow">
                    <Col lg={6}>
                        <div className='introlefttsection2'>
                            <h1 className='focusheading'>Why Chain Legacy?</h1>

                        </div>

                    </Col>
                    <Col lg={6} xs={12}>
                        <div className='introRighttsection2'>
                            <p className='Iparagraph'>Let’s breakdown the two words. Chain comes from the word blockchain and it represents the “where”. The term Legacy means putting a stamp on the future, and making a contribution to future generations. It is our “why”. Displaying our design and artwork on the blockchain for anyone to see is a tremendous opportunity and we’re very excited for that. As humans, we believe that by knowing what our legacy will be allows us to make better use of time and other resources. Chain Legacy intends to continue doing something until it is finished, even if it is difficult or unpleasant. Impatience is not our problem. We're in it for the long haul!</p>

                        </div>

                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Introduction