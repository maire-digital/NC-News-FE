import React, {useEffect, useState} from "react"
import {getTopics} from "../Api"
import {Link} from "react-router-dom"

export function SortingNav () {

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
                    <Link to={`/articles/${topic.slug}`} key={topic.slug} className="topic">{topic.slug}</Link>
                )
            })}
            </ul>
        </article>
    ))
}
