import React from 'react'
import './footer.css'
import facebook from '../../assets/social_icons/facebook.svg'
import insta from '../../assets/social_icons/insta.svg'
import linkedin from '../../assets/social_icons/linkedin.svg'
import ytb from '../../assets/social_icons/youtube.svg'
var FontAwesome = require('react-fontawesome')


const Footer = () => {
    return (
        <div className='footer container'>
            <div className='social-links'>
                <a href='https://www.facebook.com/rishabh.mishra.777363/'><img src={facebook} /></a>
                <a ><img src={insta} /></a>
                <a href='https://www.linkedin.com/in/rishabh-mishra-8a09121aa/'><img src={linkedin} /></a>
                <a><img src={ytb} /></a>
            </div>
            <div className='Location'>
                <p>
                <FontAwesome
                        className="super-crazy-colors mr-2"
                        name="map-marker"
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    /> 
                Location: Pune . Mumbai</p>
                <p>
                <FontAwesome
                        className="super-crazy-colors mr-2"
                        name="phone"
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                    Contact: +911234567890</p>
                <p>
                <FontAwesome
                        className="super-crazy-colors mr-1"
                        name="at"
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    /> 
                     : rishabh.mishra191997@gmail.com</p>
            </div>
            <div className='copyright'>
                <p>
                <FontAwesome
                        className="super-crazy-colors mr-1 copyright-icon"
                        name="copyright"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    /> 
                     2020 Rishabh Mishra</p>
            </div>
        </div>
    )
}

export default Footer