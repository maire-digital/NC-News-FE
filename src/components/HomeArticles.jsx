import {useEffect, useState} from "react"
import { useParams, useSearchParams, Link } from "react-router-dom"
import * as api from "../Api"
import { TopicsSortingNav } from "./TopicsSortingNav"
import SortBy from "./Sorter"


export default function HomeArticles () {

    const [homeArticles, setHomeArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { topic } = useParams();
    const [searchParams, setSearchParams] = useSearchParams([]);
  
    useEffect(() => {
        setIsLoading(true)
        const search = searchParams.get('sort')

        if (topic) {
            api.getArticlesByTopic(topic)
            .then((topicArticles)=> { 
            setHomeArticles(topicArticles) 
            setIsLoading(false)})     
        }

        if (search) {
            api.getSortedArticles(search)
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
    }, [topic, searchParams, setSearchParams])

    function limit (string = '', limit = 0) {  
        return string.substring(0, limit)
      }
    
    if (isLoading) return <p> Loading... </p>

    return (
        <>
        <section className="sorting">
            <TopicsSortingNav />  
            <SortBy setSearchParams={setSearchParams} /> Order: (asc/desc)
        </section>
     
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
                              <dt className="article-topic">{article.topic}</dt>
                                <dl>
                                    <time>{date.toUTCString()}</time>
                                    <dt className="article-card-snippet">{limit(article.body, 120)}  [...] </dt>
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
