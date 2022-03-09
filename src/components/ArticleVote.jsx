import { useState } from "react"
import * as api from "../Api"

export default function ArticleVote ({article: {article_id, votes}}) {

    const [voted, setVoted] = useState(false)
    const [addVote, setAddVote] = useState([votes])

    return (
        <section className="single-article-votes">
            <dt>{addVote} votes</dt>
            <button className="link" onClick={()=>{
                setAddVote(votes + 1)
                setVoted(true)
                api.updateArticleVotes(article_id)
                }}>
        {voted ? "voted" : "vote for article"}
    </button>
        </section>
        
 
    )
}