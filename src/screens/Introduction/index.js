import React from 'react';
import Banner from '../../component/BannerComponent';
import HeaderComponent from '../../component/HeaderComponent';
import bannerimage from '../../assets/bannerimage.png'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import introimage from '../../assets/introimage.png'

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
            <div className='introEctionpage'>
                <HeaderComponent />
                <Banner data={introduction} />
                <Container className="d-flex justify-content-center flex-wrap ">
                    <div className=" introContainerWidth   d-flex justify-content-between  " >

                        {
                            imagloop.map((data, index) => {
                                return <div className='imgdiv'>
                                    <Image className='img-fluid' src={data.image} />
                                </div>


                            })
                        }


                    </div>
                </Container>
                <Container  >
                    <h1 className='introhead'>Introduction</h1>
                    <p className='intropayra'> Chain Legacy is a collection of Non-fungible-tokens (NFTs) for the Internet-Scale blockchain. Our goal is to enhance the legacy of the Elrond blockchain by creating meaningful and high quality pieces of digital art.</p>
                </Container>




            </div>


        </>
    )
}

export default Introductionpage;
