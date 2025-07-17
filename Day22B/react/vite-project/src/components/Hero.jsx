import React, { useState } from 'react'
import File from './File'

function Hero(props) {
    props.setName("Wasi")

    return (
        <div>
            <h1>Hero Section {props.count} </h1>
            <File count={props.count} />
        </div>
    )
}

export default Hero
