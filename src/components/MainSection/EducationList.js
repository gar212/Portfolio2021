import React from 'react'

const EducationList = (props) => {
    // Simple component to pass unique key when mapping. Gets rid of pesky error React throws out
    return (
        <li>{props.keyPoints}</li>
    )
}

export default EducationList
