import { useState } from "react"
import * as api from "../Api"

export default function Voter ({article: {article_id, votes}}) {

    const [voted, setVoted] = useState(false)
    const [addVote, setAddVote] = useState(0)

    return (
        <section className="single-article-votes">
            <dt>{addVote + votes} votes</dt>
            <button className="link" id={voted ? "hide" : "show"}  onClick={()=>{
                setAddVote(1)
                setVoted(true)
                api.updateArticleVotes(article_id, 1)
                .catch(() => {
                    setAddVote(votes - 1) 
                    alert("sorry! please vote again")})
                }}> +
            </button>
            <button className="link" id={voted ? "show" : "hide"}onClick={()=>{
                setAddVote(0)
                setVoted(false)
                api.updateArticleVotes(article_id, -1)
                .catch(() => {
                    setAddVote(votes + 1) 
                    alert("sorry! please vote again")})
                }}> -
            </button>
        </section>
        
 
    )
}