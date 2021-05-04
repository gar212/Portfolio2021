import React from 'react'

const InfoLang = (props) => {

    const circleAnimation =  `
        @keyframes circleAnim1 {
            0% {
                strokeDasharray: 1000;
                strokeDashoffset: 1000;
            }
            100% {
                strokeDasharray: 1000;
                strokeDashoffset: calc(1000 - (1000 * 50) / 343);
            }
        }
    `
    


    return (
        <div className="info-lang-container">
            <div className="info-lang-circle">
                <svg viewBox="0 0 100 100">
                    <path d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#eee" stroke-width="7"
                        fill-opacity="0"></path>
                    <path id="circleAnim1" d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93" stroke="#555" stroke-width="7"
                        fill-opacity="0" style={{circleAnimation}}></path>
                </svg>
                <div className="info-lang-percent">
                    100%
                </div>
            </div>
            <div></div>
            <p>Gibberish</p>
        </div>
    )
}

export default InfoLang
