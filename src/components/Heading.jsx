import React from 'react'
import '../assets/scss/heading.scss'
const Heading = (props) => {
    return (
        <div className="title_area">
            <h1>{props.title}</h1>
            <p className="">Lorem Ipsum is simply dummy text of the printing and 
            typesetting <br />industry. Lorem Ipsum has been the industry's standard</p>
        </div>
    )
}

export default Heading
