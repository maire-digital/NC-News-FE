import { useState } from "react";
import * as api from "../Api"
import { useParams } from "react-router-dom"

export default function CommentAdder ({setIsPosted}) {
    const [comment, setComment] = useState("");
    const { article_id } = useParams();

    function handleSubmit(e) {
        e.preventDefault();
        api.postComment(article_id, comment)
            .then(() => {
                setIsPosted(true)
            })
            .catch(() => {
                setComment("") 
                alert("sorry! please try again")})
        setComment("");
        setIsPosted(false)
      }

      function handleChangeComment(e) {
        setComment(e.target.value);
      }

      return (
        <form className="input" onSubmit={handleSubmit}>
        
            <input value={comment} onChange={handleChangeComment} type="text" className="comment-input" placeholder="Leave a comment">
            </input>
            <button>post</button>
            
        </form>
      );

}