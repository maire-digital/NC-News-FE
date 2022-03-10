import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import * as api from "../Api"
import ArticleVote from "./ArticleVote"

export default function SingleArticle () {

    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { article_id } = useParams();

    useEffect(() => {
        setIsLoading(true)

        api.getSingleArticle(article_id)
        .then((article)=> { 
        setArticle(article) 
        setIsLoading(false)})     
        
    }, [article_id])

    if (isLoading) return <p> Loading... </p>

    return(

    <article className="single-article"> 
        <section className="single-article-header">
            <h2>{article.title}</h2>
            <h4> {article.author}</h4>
        </section>

        <section className="single-article-details">
            <h4>{article.topic}</h4> 
            <time>posted at {article.created_at}</time>     
        </section> 

        <p className="single-article-body">{article.body}</p>
                
        <ArticleVote article={article}/>
        
        </article>

    )
}