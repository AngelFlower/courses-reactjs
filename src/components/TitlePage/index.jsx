import React from 'react'

function TitlePage(props) {
    return (
        <div className='container'>
            <h1 className='my-3 display-3'>{props.title}</h1>
        </div>
    )
}

export default TitlePage