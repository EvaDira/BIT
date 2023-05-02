import { useState, useEffect } from "react";

export default function Jokes() {

    const [joke, setJoke] = useState([])

    useEffect(() => {
        fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
            .then(response => response.json())
            .then(data => setJoke(data.jokes))
    }, [])

    return (
        <div>
            {joke.map((list, _) =>
                <p>{list.type === "single" ?
                    list.joke : `${list.setup} ${list.delivery}`}</p>
            )}
        </div>
    );

}
