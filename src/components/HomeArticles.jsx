import {useEffect, useState} from "react"
import { useParams, Link } from "react-router-dom"
import * as api from "../Api"
import { SortingNav } from "./SortingNav"


export default function HomeArticles () {

    const [homeArticles, setHomeArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { topic } = useParams();
  
    useEffect(() => {
        setIsLoading(true)
        if (topic) {
   
        api.getSortedArticles(topic)
        .then((sortedArticles)=> { 
        setHomeArticles(sortedArticles) 
        setIsLoading(false)})     
        }
        
        else {
        api.getArticles()
        .then(articles=>{
        setHomeArticles(articles)
        setIsLoading(false)
        })      
        }
    }, [topic])

    function limit (string = '', limit = 0) {  
        return string.substring(0, limit)
      }
    
    if (isLoading) return <p> Loading... </p>

    return (
        <>
     <SortingNav />
        <article>
            <ul className="articles-list">
            {homeArticles.map(article => {
                const date = new Date(Date.parse(article.created_at))

                return (
                    
                    <li key={article.article_id} className="article-card">
                         <Link to={`/articles/${article.article_id}`} key={article.article_id} className="article-link">
                             <h2 id="article-title">{article.title}</h2>
                        </Link>
                            <main className="article-card-body">
                              <h4 className="user"> {article.author}</h4>
                              <dt className="article-card-topic">{article.topic}</dt>
                                <dl>
                                    <time>{date.toUTCString()}</time>
                                    <dt className="article-card-snippet">{limit(article.body, 120)}... </dt>
                                    <dt>see more...</dt>
                                    <section id="article-info">
                                    
                                    <dt>{article.comment_count} comments </dt>
                                    <dt>{article.votes} votes</dt>
                                    </section>
                                </dl>   
                            </main>
                           
                    </li>
                )
            })}
            </ul>
        </article>
    </>)
}
