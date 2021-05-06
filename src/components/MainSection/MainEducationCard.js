import React from 'react'
import './MainEducationCard.css';
import EducationList from './EducationList';

const MainEducationCard = (props) => {
    return (
    <div className="main-aut-card">
        <img src={props.image} alt="" />
        <div className="main-aut-info">
            <h4>{props.name}</h4>
            <h5>{props.subText}</h5>
            <ul>
                {
                    props.keyPoints.map((e, index) => 
                    <EducationList key={index} keyPoints={e} />)
                }
            </ul>
            
            {/* Learn More CTA - Disabled. May need in future */}
            {/* <a className="yellow-learn" href="/">LEARN MORE <span>{`>`}</span></a> */}
        </div>
    </div>
    )
}

export default MainEducationCard
