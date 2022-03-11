import { useState } from "react";
import * as api from "../Api"
import { useParams } from "react-router-dom"

export default function CommentAdder ({setIsPosted}) {
    const [comment, setComment] = useState("");
    const { article_id } = useParams();
    const isEnabled = comment.length > 0

    function handleSubmit(e) {

        if (isEnabled) {
            e.preventDefault();

            api.postComment(article_id, comment)
                .then(() => {
                    setIsPosted(true)
                })
                .catch(() => {
                    setComment("") 
                    alert("sorry! please try again")})

            setComment("");
            setIsPosted(false)}
        }

      function handleChangeComment(e) {
        setComment(e.target.value);
      }

      return (
        <form className="input" onSubmit={handleSubmit}>
        
            <textarea value={comment} onChange={handleChangeComment} type="text" className="comment-input" placeholder="Leave a comment">
            </textarea>
            <button disabled={!isEnabled}>post</button>
            
        </form>
      );

}