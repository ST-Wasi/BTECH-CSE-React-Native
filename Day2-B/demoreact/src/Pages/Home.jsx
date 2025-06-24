import React, { use, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

    const [todoData, setTodoData] = useState([])

    async function getTodoData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data = await response.json()
            console.log('✌️data --->', data);
            setTodoData(data)
        } catch (error) {
            console.log('✌️error --->', error);

        }
    }



    useEffect(() => {
        getTodoData()
    }, [])

    return (
        <div>
            <h1 style={{ color: "white" }}>Home Page Of React App</h1>
            <Link to="/about">Go To ABout Page</Link>
            <ul>
                {
                    todoData.map((todo) => {
                        return <li style={todo.completed ? { color: "green" } : { color: "crimson" }}>
                            {todo.title}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Home
