import React from 'react';
import footerImage from '../../assets/image.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faDiscord,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';

// 


const FooterComponent = () => {
    return (
        <div className="footer container-fluid px-5">
            <div className="px-5">
                <div className="d-flex align-items-center flex-column mb-3">
                    <div >
                        <img className="img-fluid" src={footerImage} />
                    </div>
                    <div className="d-flex justify-content-around iconContainerWidth">
                        <div className="iconCircle d-flex  align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faDiscord} />
                        </div>
                        <div className="iconCircle d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>

                    </div>
                </div>
                <div className="d-flex justify-content-center footerNavBorder">

                    <ul className="list-unstyled d-flex justify-content-between flex-sm-row flex-column flex-wrap mt-4 mb-5">
                        <li className="footerLinks">Introduction</li>
                        <li className="footerLinks mx-0 mx-sm-5">Roadmap</li>
                        <li className="footerLinks">FAQ</li>
                    </ul>


                </div>
            </div>
        </div>
    )
}

export default FooterComponent
