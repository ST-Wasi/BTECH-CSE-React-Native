import { Link } from "react-router-dom"

function About() {
    return (
        <div>
            <h1>ABout Page</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, repellendus ipsam. Culpa ex suscipit officia aliquid mollitia ab repudiandae non tempore, cumque possimus perferendis.</p>
            <Link to="/">Go To Home Page</Link>
        </div>
    )
}

export default About
