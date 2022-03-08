import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
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
                return (
                    <li key={article.article_id} className="article-card">
                            <h2 className="article-title">{limit(article.title, 25)}...</h2>
                            <h4 className="user"> {article.author}</h4>
                            <dl>
                                <dt id="artice-card-topic">{article.topic}</dt>
                                <time>posted at {article.created_at}</time>
                                <dt>{limit(article.body, 100)}... </dt>
                                <dt>see more...</dt>
                                <section id="article-info">
                                
                                <dt>{article.comment_count} comments </dt>
                                <dt>{article.votes} votes</dt>
                                </section>
                            </dl>
                    </li>
                )
            })}
            </ul>
        </article>
    </>)
}
