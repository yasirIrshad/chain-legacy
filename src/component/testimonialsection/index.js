import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import introimage from '../../assets/introimage.png'
import g1 from '../../assets/g1.png'
import g2 from '../../assets/g2.png'
import g3 from '../../assets/g3.png'
import g4 from '../../assets/g4.png'
const testimonial=[
    {
        image:g1,
        title:"Chaos Theory",
        designation:"Design & Graphics"
    },
    {
        image:g2,
        title:"Yasir",
        designation:"Full Stack Developer"
    },
    {   image:g3,
        title:"Arthur",
        designation:" Technology & Blockchain"
    },
    {   image:g4,
        title:"William",
        designation:"Community & Marketing"
    },

]

const TestiMonial = () => {

    return(
        <div c>
            <Container >
            
                <Row  >
                <h1 className=' testhead text-white text-center'>Chain Legacy team</h1>
                   {
                       testimonial.map((val,index)=>{
                           return <Col className='teetRow mt-5'key={index} md={3}  sm={6} xs={12}>
                     <div className='w-100'>
                           <Image style={{width:"100%",borderRadius:"33px"}} 
                                       src={val.image}
                                   />
                                   </div>
                               <h2 className='testName text-center mt-3'>{val.title}</h2>
                               <h5  className='textDesignation  text-center mt-2'>{val.designation}</h5>
                        
   
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