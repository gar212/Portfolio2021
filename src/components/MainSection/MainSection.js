import React from 'react'
import MainBanner from './MainBanner'
import MainEducationCard from './MainEducationCard'
import MainProjectCard from './MainProjectCard'
import MainJobTimeline from './MainJobTimeline'
import ProjectInfo from './Info/MainProjectInfo'
import EducationInfo from './Info/EducationInfo'
import './MainSection.css';

const MainSection = () => {
    return (
        <div className="main-section">
            <MainBanner />
            <h3>Projects</h3>
            <div className="main-project">
                {
                ProjectInfo.map((e, index) => 
                <MainProjectCard
                    key={index}
                    name={e.name}
                    desc={e.desc}
                    image={e.image}
                    link={e.link} />
                    )
                }
            </div>

            <h3>Jobs</h3>
            <div>
                <MainJobTimeline />
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
                    keyPoints={e.keyPoints} />
                    )
                }
            </div>

            <footer><p>Garet Lam © 2021. Made with ReactJS</p></footer>
        </div>
    )
}

export default MainSection
