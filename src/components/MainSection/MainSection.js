import React from 'react'
import MainBanner from './MainBanner'
import MainEducationCard from './MainEducationCard'
import MainJobContainer from './MainJobContainer'
import EducationInfo from './EducationInfo';
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
                {
                EducationInfo.map((e, index) => 
                <MainEducationCard
                    key={index}
                    name={e.name}
                    image={e.image}
                    subText={e.subText}
                    keyPoints={e.points} />
                    )
                }
            </div>

            <footer><p>Garet Lam © 2021</p></footer>
        </div>
    )
}

export default MainSection
