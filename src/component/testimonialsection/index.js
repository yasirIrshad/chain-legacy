import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import introimage from '../../assets/introimage.png'

const testimonial=[
    {
        title:"Chaos Theory",
        designation:"Design & Graphics"
    },
    {
        title:"Yasir",
        designation:"Full Stack Developer"
    },
    {
        title:"Arthur",
        designation:" Technology & Blockchain"
    },
    {
        title:"William",
        designation:"Community & Marketing"
    },

]

const TestiMonial = () => {

    return(
        <div className='TestiMonial'>
            <Container >
            
                <Row  >
                <h1 className=' testhead text-white text-center'>Chain Legacy team</h1>
                   {
                       testimonial.map((val,index)=>{
                           return <Col className='teetRow mt-5'key={index} md={3}  sm={6} xs={12}>
                     <div className='w-100'>
                           <Image width={"100%"}
                                       src={introimage}
                                   />
                                   </div>
                               <h2 className='testName text-center mt-3'>{val.title}</h2>
                               <h5  className='textDesignation text-center mt-2'>{val.designation}</h5>
                        
   
                       </Col>

                       })
                   }
                    {/* <Col className='teetRow mt-5' lg={3} xs={12}>
                     
                        <Image width={"100%"}
                                    src={introimage}
                                />
                            <h2 className='testName text-center'>Chaos Theory</h2>
                            <h5  className='textDesignation text-center'>Design & Graphics</h5>
                     

                    </Col>
                    <Col className='teetRow' lg={3} xs={12}>
                      
                        <Image width={"100%"}
                                    src={introimage}
                                />
                            <h2 className='testName text-center '>Yasir</h2>
                            <h5 className='textDesignation text-center'>Full Stack Developer</h5>
                   

                    </Col>
                    <Col className='teetRow' lg={3} xs={12}>
                        <div >
                        <Image width={"100%"}
                                    src={introimage}
                                />
                            <h2 className='testName text-center'>Arthur</h2>
                            <h5 className='textDesignation text-center'>Technology & Blockchain</h5>

                        </div>

                    </Col>
                    <Col className='teetRow' lg={3} xs={12}>
                        <div className='testimonialcontent' >
                        <Image width={"100%"}
                                    src={introimage}
                                />
                            <h2 className='testName text-center'>William</h2>
                            <h5 className='textDesignation text-center'>Community & Marketing</h5>
                        </div>

                    </Col> */}
                    </Row></Container></div>




    )};


export default TestiMonial;