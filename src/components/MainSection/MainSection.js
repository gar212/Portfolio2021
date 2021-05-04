import React from 'react'
import MainBanner from './MainBanner'
import MainEducationCard from './MainEducationCard'
import MainJobContainer from './MainJobContainer'
import './MainSection.css';

const MainSection = () => {
    return (
        <div className="main-section">
            <MainBanner />
            <h3>Things I can do</h3>
            
            <div className="main-jobs">
                <MainJobContainer />
                <MainJobContainer />
                <MainJobContainer />
                
            </div>

            <h3>Education</h3>
            <div className="main-aut">
                <MainEducationCard />
                <MainEducationCard />
                <MainEducationCard />
            </div>

            <footer>
                <p>2021 Garet Lam | Mission Ready - Mission 1</p>
            </footer>
        </div>
    )
}

export default MainSection
