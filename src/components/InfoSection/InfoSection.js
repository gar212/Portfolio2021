import React from 'react'
import InfoHardSkill from './InfoHardSkill'
import InfoLang from './InfoLang'
import './InfoSection.css';
import profileImage from '../../img/profile.jpg'

const InfoSection = () => {
    return (
        <div>
            <div className="info-section">
            <div className="info-header">

                <div className="info-header-profile">
                    <img src={profileImage} alt="Garet Lam Profile" />
                </div>
                <h4>Garet Lam</h4>
                <p>Coder. Designer. Developer.</p>
            </div>
            <div className="info-container">
                <div className="info-bio">
                    <ul>
                        <li><p>Residence:</p><span>New Zealand</span></li>
                        <li><p>City:</p><span>Auckland</span></li>
                        <li><p>Origin:</p><span>Vietnam</span></li>
                        <li><p>Age:</p><span>25</span></li>
                    </ul>
                </div>
                <div className="info-lang">
                    <InfoLang circleAnim="circleAnim1" name="Gibberish" percent="100"/>
                    <InfoLang circleAnim="circleAnim2" name="English" percent="80" />
                    <InfoLang circleAnim="circleAnim3" name="Vietnamese" percent="40" />
                </div>
                <div className="info-hardskills">
                    <InfoHardSkill />
                </div>
            </div>
            <div className="social-media">      
                <a href="/"><i className="fab fa-facebook"></i></a>
                <a href="/"><i className="fab fa-twitter"></i></a>
                <a href="/"><i className="fab fa-instagram"></i></a>
                <a href="/"><i className="fab fa-github"></i></a>
                <a href="/"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div> 
        </div>
    )
}

export default InfoSection;
