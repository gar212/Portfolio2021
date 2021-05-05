import React from 'react'

const InfoLang = (props) => {
    
    return (
        <div className="info-lang-container">
            <div className="info-lang-circle">
                <svg viewBox="0 0 100 100">
                    <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#eee" strokeWidth="7"
                        fillOpacity="0"></path>
                    <path id={props.circleAnim} d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#555" strokeWidth="7"
                        fillOpacity="0"></path>
                </svg>
                <div className="info-lang-percent">
                    {`${props.percent}%`}
                </div>
            </div>
            <div></div>
            <p>{props.name}</p>
        </div>
    )
}

export default InfoLang
