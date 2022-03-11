import {useEffect, useState} from "react"
import {getTopics} from "../Api"
import {Link} from "react-router-dom"

export function TopicsSortingNav () {

    const [allTopics, setAllTopics] = useState([])
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
        <article>
            <ul className="topics-list">
            {allTopics.map(topic => {
                return (  
                    <Link to={`/articles/show/${topic.slug}`} key={topic.slug} className="link" >{topic.slug}</Link>
                )
            })}
            </ul>
        </article>
    ))
}
