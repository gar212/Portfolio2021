import React from 'react'
import InfoHardSkill from './InfoHardSkill'
import InfoLang from './InfoLang'

const InfoSection = () => {
    return (
        <div>
            <div class="info-section">
            <div class="info-header">

                <div class="info-header-profile">
                    <img src="img/profile.jpg" alt="" />
                </div>
                <h4>Garet Lam</h4>
                <p>Coder. Designer. Developer.</p>
            </div>
            <div class="info-container">
                <div class="info-bio">
                    <ul>
                        <li><p>Residence:</p><span>New Zealand</span></li>
                        <li><p>City:</p><span>Auckland</span></li>
                        <li><p>Origin:</p><span>Vietnam</span></li>
                        <li><p>Age:</p><span>25</span></li>
                    </ul>
                </div>
                <div className="info-lang">
                    <InfoLang />
                </div>
                <div className="info-hardskills">
                    <InfoHardSkill />
                </div>
            </div>
            <div class="social-media">      
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div> 
        </div>
    )
}

export default InfoSection;
