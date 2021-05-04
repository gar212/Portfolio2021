import React from 'react'

const MainEducationCard = () => {
    return (
    <div className="main-aut-card">
        <img src="img/aut.jpg" alt="" />
        <div className="main-aut-info">
            <h4>Auckland University of Technology</h4>
            <h5>Bachelor of Digital Design</h5>
            <ul>
                <li>Character Rigging</li>
                <li>2D & 3D Animation</li>
                <li>Game Design</li>
                <li>Film & Animation</li>
            </ul>
            <a className="yellow-learn" href="/">LEARN MORE <span>{`>`}</span></a>
        </div>
    </div>
    )
}

export default MainEducationCard
