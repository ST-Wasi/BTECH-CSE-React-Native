import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div style={{ background: 'black' }}>
            <h1 style={{ color: "white" }}>This is Home Page</h1>
            <a style={{ color: "white" }} href="/about">Go to About Page Anchor</a>
            <div></div>
            <Link style={{ color: "white" }} to="/about">Go to About Page</Link>
        </div>
    )
}

export default Home
