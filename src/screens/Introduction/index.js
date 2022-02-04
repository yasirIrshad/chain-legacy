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
const Introductionpage = () => {
    return (

        <>
            <div className='introEctionpage'>
                <HeaderComponent />
                <Banner data={introduction} />
                <Container className="d-flex justify-content-center flex-wrap ">
                    <div className=" introContainerWidth   d-flex justify-content-between  " >
                        <div>
                            <Image src={introimage} />
                        </div>
                        <div>
                            <Image src={introimage} />
                        </div>
                        <div>
                            <Image src={introimage} />
                        </div>
                        <div>
                            <Image src={introimage} />
                        </div>
                        <div>
                            <Image src={introimage} />
                        </div>
                    </div>
                </Container>
            </div>


        </>
    )
}

export default Introductionpage;
