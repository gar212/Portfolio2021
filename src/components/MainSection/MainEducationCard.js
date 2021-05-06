import React from 'react'
import './MainEducationCard.css';

const MainEducationCard = (props) => {
    return (
    <div className="main-aut-card">
        <img src={props.image} alt="" />
        <div className="main-aut-info">
            <h4>{props.name}</h4>
            <h5>{props.subText}</h5>
            <ul>
                <li>Character Rigging</li>
                <li>2D & 3D Animation</li>
                <li>Game Design</li>
                <li>Film & Animation</li>
            </ul>
            {/* <a className="yellow-learn" href="/">LEARN MORE <span>{`>`}</span></a> */}
        </div>
    </div>
    )
}

export default MainEducationCard
