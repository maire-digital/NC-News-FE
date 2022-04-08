import {useEffect, useState} from "react"
import { useParams, useSearchParams, Link } from "react-router-dom"
import * as api from "../Api"
import { TopicsSortingNav } from "./TopicsSortingNav"
import SortBy from "./Sorter"
import ErrorPage from "./ErrorPage"


export default function HomeArticles () {

    const [homeArticles, setHomeArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { topic } = useParams();
    const [searchParams, setSearchParams] = useSearchParams({sort: "created_at", order: "desc"});
    const [error, setError] = useState(null);

  
    useEffect(() => {
        setIsLoading(true)
        const searchObj = Object.fromEntries([...searchParams])
        setError(null)
        if (topic) {
            api.getArticlesByTopic(topic)
            .then((topicArticles)=> { 
            setHomeArticles(topicArticles) 
            setIsLoading(false)        
            })
            .catch((err) => {
                setIsLoading(false)
                setError({ err });
              });     
        }

        if (searchObj) {
            api.getSortedArticles(searchObj.sort, searchObj.order, topic)
            .then((sortedArticles)=> { 
            setHomeArticles(sortedArticles) 
            setIsLoading(false)})
            .catch((err) => {
                setIsLoading(false)
                setError({ err });
              });              
        }
        
        else {
            api.getArticles()
            .then(articles=>{
            setHomeArticles(articles)
            setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
                setError({ err });
              });      
        }
    }, [topic, searchParams, setSearchParams, setError])

    function limit (string = '', limit = 0) {  
        return string.substring(0, limit)
      }
    
    if (isLoading) return <p> Loading... </p>

    if (error) {
        return <ErrorPage message={error.something} />;
      }

    return (
        <>
        <section>
            <TopicsSortingNav />  
            <SortBy setSearchParams={setSearchParams} searchParams={searchParams} />
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
