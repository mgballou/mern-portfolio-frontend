import { useState, useEffect } from "react";


function About(props) {

    const [about, setAbout] = useState(null)

    async function getAboutData() {
        const response = await fetch("./about.json")
        const data = await response.json()
        console.log(data)
        setAbout(data)
       
    }

    function loaded() {
        return (
            <div>
                <h2>{about.name}</h2>
                <h3>{about.email}</h3>
                <p>{about.bio}</p>
            </div>
        )
    }

    useEffect(() => { getAboutData() }, [])

    return (
        about ? loaded() : <h1>Loading...</h1>
    );
}

export default About;
