import React from 'react'

const InfoHardSkill = (props) => {
    return (
        <div className="info-hardskills-container">
            <div className="info-hardskill-label"><p>{props.name}</p><span>{props.percent}%</span></div>
            <div className="progress-bar">
                <div className="bar" style={{maxWidth:`${props.percent}%`}}></div>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default InfoHardSkill
