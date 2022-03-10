import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import * as api from "../Api"
import Voter from "./Voter"
import ArticleComments from "./SingleArticleComments"

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

    const date = new Date(Date.parse(article.created_at))

    return(
    <>
    <article className="single-article"> 

        <section className="single-article-header">
            <h2>{article.title}</h2>
            <h4>{article.topic}</h4> 
        </section>

        <section className="single-article-details">
             <h4> {article.author}</h4>
            <time>{date.toUTCString()}</time>   
        </section> 

        <p className="single-article-body">{article.body}</p>       
        <Voter article={article}/>
        
    </article>

    <h3 className="article-comments-title"> Comments </h3>
    <ArticleComments />
    
    </>
    )
}