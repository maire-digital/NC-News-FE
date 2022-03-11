import { useState } from "react"

export default function SortBy ({setSearchParams}) {

    const [clicked, setClicked] = useState(false)


    return (
        <div className="dropdown">
        <button className="dropbtn" onClick={()=>{clicked ? setClicked(false) : setClicked(true)}}>sort articles</button>
        <section  className="dropdown-content">

            <button className="link" id={clicked ? "show" : "hide"} onClick={()=>{setSearchParams({sort: "votes"}); setClicked(false)}}> votes </button>

            <button className="link" id={clicked ? "show" : "hide"} onClick={()=>{setSearchParams({sort: "created_at"}); setClicked(false)}}> date </button>
            
            <button className="link" id={clicked ? "show" : "hide"} onClick={()=>{setSearchParams({sort: "comment_count"}); setClicked(false)}}> comment_count </button>

        </section>
      </div> 
    )
}