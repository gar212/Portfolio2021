import React from 'react'

const MainProjectCard = (props) => {
    return (
        <div className="project-container">
            <img src={props.image} alt="" />
            <div className="project">
                <h5>{props.name}</h5>
                <p>{props.desc}</p>
                <a href={props.link} target="_blank" rel="noreferrer noopener">OPEN WEBSITE <span>{`>`}</span></a>
            </div>
        </div>
    )
}

export default MainProjectCard
