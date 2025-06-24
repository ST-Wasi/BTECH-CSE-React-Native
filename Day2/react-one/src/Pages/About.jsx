import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function About() {
    const [loading, setLoading] = useState(false)
    const [todoData, setTodoData] = useState([])
    const [fullName, setFullname] = useState("")


    if (loading) {
        return (
            <h1>Loading</h1>
        )
    }

    return (
        <div style={{ background: 'black' }}>
            <h1 style={{ color: "white" }}>This is About Page</h1>
            <a style={{ color: "white" }} href="/">Go To Home Page Anchor Tag</a>
            <div></div>
            <Link style={{ color: "white" }} to="/">Go To Home Page</Link>


            <input type="text" name='fullname' value={fullName} onChange={(e) => {
                setFullname(e.target.value)
            }} />

            <button onClick={() => {
                console.log(fullName)
            }}>Submit</button>


        </div>
    )
}

export default About
