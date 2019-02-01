import React from 'react'

export default props => (
    <div className='container'>
        <section className='content-header'>
            <h1>{props.title} <small>{props.small}</small></h1>
        </section>
    </div>
)