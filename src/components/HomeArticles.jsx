import {useEffect, useState} from "react"
import * as api from "../Api"


export default function HomeArticles () {

    const [homeArticles, setHomeArticles] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        api.getArticles()
        .then(articles=>{
            setHomeArticles(articles)
            setIsLoading(false)
        })
    }, [])

    return (
        isLoading ? <p>Loading...</p> : (
        <article>
            <ul className="articles-list">
            {homeArticles.map(article => {
                return (
                    <li key={article.article_id} className="article-card">
                            <h2>{article.title}</h2>
                            <h4> {article.author}</h4>
                            <dl>
                                <dt>posted at {article.created_at}</dt>
                                <dt>{article.body}</dt>
                                <section id="article-info">
                                <dt>{article.topic}</dt>
                                <dt>{article.comment_count} comments </dt>
                                <dt>{article.votes} votes</dt>
                                </section>
                            </dl>
                    </li>
                )
            })}
            </ul>
        </article>
    ))
}
