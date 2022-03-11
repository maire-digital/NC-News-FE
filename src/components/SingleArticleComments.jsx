import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import * as api from "../Api"
import Collapse from "./Collapse"
import CommentAdder from "./CommentAdder"
import CommentDeleter from "./CommentDeleter"

export default function ArticleComments () {

    const [articleComments, setArticleComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isPosted, setIsPosted] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)

    const { article_id } = useParams();

    useEffect(() => {
        setIsLoading(true)

        api.getComments(article_id)
        .then((comments)=> { 
        setArticleComments(comments) 
        setIsLoading(false)})     
        
    }, [article_id, isPosted, isDeleted])

    if (isLoading) return <p> Loading... </p>

    return(
        <>
        <CommentAdder setIsPosted={setIsPosted}/>
        <Collapse>
        <ul className="comments-list">
            {articleComments.map((comment) => {

            const date = new Date(Date.parse(comment.created_at))

            return(
                <li className="comment-card" key={comment.comment_id}>
                    <dt>{comment.author}</dt>
                    <time>{date.toUTCString()}</time>  
                    <dt>{comment.body}</dt>
                    <CommentDeleter isDeleted={isDeleted} setIsDeleted={setIsDeleted} comment_id={comment.comment_id} author={comment.author}/>
                </li>
            )})}
        </ul>
        </Collapse>
        </>
    )

}