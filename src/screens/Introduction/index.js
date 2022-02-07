import React from 'react';
import Banner from '../../component/BannerComponent';
import HeaderComponent from '../../component/HeaderComponent';
import bannerimage from '../../assets/bannerimage.png'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import introimage from '../../assets/introimage.png'
import FooterComponent from '../../component/FooterComponent';
import ScrollToTopOnMount from '../../scroll';
const introduction = [
    {

        title: "Introduction",

    },
]
const imagloop = [
    { image: introimage, },
    { image: introimage, },
    { image: introimage, },
    { image: introimage, },
    { image: introimage, }
]
const Introductionpage = () => {
    return (

        <>
            <ScrollToTopOnMount />
            <div className='introEctionpage'>
                <HeaderComponent />
                <Banner data={introduction} />
                <Container className="d-flex justify-content-center  ">
                    <div className=" introContainerWidth   d-flex justify-content-between" >

                        {
                            imagloop.map((data, index) => {
                                return <div key={index} className='imgdiv'>
                                    <Image className='img-fluid' src={data.image} />
                                </div>


                            })
                        }


                    </div>
                </Container>
                <Container  >
                    <h1 className='introhead text-center'>Introduction</h1>
                    <p className='intropayra text-center'> Chain Legacy is a collection of Non-fungible-tokens (NFTs) for the Internet-Scale blockchain. Our goal is to enhance the legacy of the Elrond blockchain by creating meaningful and high quality pieces of digital art.</p>
                </Container>
                <Container  >
                    <Row>
                        <Col lg={6} className='justify-content-center'>
                            <div className='inmain'>
                                <div className='imgdiv1 justify-content-center' >
                                    <Image className='intrimg' src={introimage} />
                                </div>
                            </div>

                        </Col>
                        <Col lg={6}>
                            <div className='inmain2'>
                                <h1 className='introhead2 text-center text-sm-start' >Why Chain Legacy?</h1>
                                <p className='intropayra2 '> Let’s breakdown the two words. Chain comes from the word blockchain and it represents the “where”. The term Legacy means putting a stamp on the future, and making a contribution to future generations. It is our “why”. Displaying our design and artwork on the blockchain for anyone to see is a tremendous opportunity and we’re very excited for that. As humans, we believe that by knowing what our legacy will be allows us to make better use of time and other resources. Chain Legacy intends to continue doing something until it is finished, even if it is difficult or unpleasant. Impatience is not our problem. We're in it for the long haul!</p>
                            </div>
                        </Col>
                    </Row>

                </Container>
                <FooterComponent />




            </div>


        </>
    )
}

export default Introductionpage;
