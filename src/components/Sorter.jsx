import { useState } from "react"

export default function SortBy ({setSearchParams, searchParams}) {

    const [clicked, setClicked] = useState(false)
    const sortQuery = searchParams.get('sort')


    return (
        <div  className="sorting">
            <div className="sort-dropdown">

                <button className="sort-dropbtn" onClick={()=>{clicked ? setClicked(false) : setClicked(true)}}>sort articles</button>
                
                <section  className="sort-dropdown-content">
                    
                    <button className="link" id={clicked ? "show" : "hide"} onClick={()=>{setSearchParams({sort: "votes", order: "desc"}); setClicked(false)}}> votes </button>

                    <button className="link" id={clicked ? "show" : "hide"} onClick={()=>{setSearchParams({sort: "created_at"}); setClicked(false)}}> date </button>

                    <button className="link" id={clicked ? "show" : "hide"} onClick={()=>{setSearchParams({sort: "comment_count", order:"desc"}); setClicked(false)}}> comment_count </button>

                
                </section>
            </div> 

        <div className="order-dropdown">
            <button className="order-dropbtn" onClick={()=>{clicked ? setClicked(false) : setClicked(true)}}>order</button>

            <section className="order-dropdown-content">

                <button className="link" id={clicked ? "show" : "hide"} onClick={()=>{setSearchParams({sort: sortQuery, order: "asc"}); setClicked(false)}}> asc </button>

                <button className="link" id={clicked ? "show" : "hide"} onClick={()=>{setSearchParams({sort: sortQuery, order: "desc"}); setClicked(false)}}> desc </button>

            </section>
        </div>
      </div>
    )
}