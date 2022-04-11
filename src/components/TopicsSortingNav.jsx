import {useEffect, useState} from "react"
import {getTopics} from "../Api"
import {Link} from "react-router-dom"

export function TopicsSortingNav () {

    const [allTopics, setAllTopics] = useState([])
    const [clicked, setClicked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    

    useEffect(() => {
        setIsLoading(true)
        getTopics()
        .then(topics=>{
            setAllTopics(topics)
            setIsLoading(false)
        })
    }, [])

    return (
        isLoading ? <p> Loading...</p> : (
        <article className="topics-list-dropdown">
            <button  onClick={() => { clicked ? setClicked(false) : setClicked(true) }}> topics </button>
            <ul className="topics-list">
            {allTopics.map(topic => {
                return (  
                    <Link to={`/articles/show/${topic.slug}`} key={topic.slug} className="link dropdown-content" id={clicked ? "show" : "hide"} onClick={() => { setClicked(false) }} >{topic.slug}</Link>
                )
            })}
            </ul>
        </article>
    ))
}
