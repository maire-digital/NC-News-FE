import { useState } from "react"

export default function SortBy({ setSearchParams, searchParams }) {

    const [sortClicked, setSortClicked] = useState(false)
    const [orderClicked, setOrderClicked] = useState(false)
    const sortQuery = searchParams.get('sort')


    return (
        <div className="sorting">
            <div className="sort-dropdown">

                <button className="sort-dropbtn" onClick={() => { sortClicked ? setSortClicked(false) : setSortClicked(true) }}>sort by </button>

                <section className="sort-dropdown-content">

                    <button className="find-me" id={sortClicked ? "show" : "hide"} onClick={() => { setSearchParams({ sort: "votes", order: "desc" }); setSortClicked(false) }}> votes </button>

                    <button id={sortClicked ? "show" : "hide"} onClick={() => { setSearchParams({ sort: "created_at" }); setSortClicked(false) }}> date </button>

                    <button id={sortClicked ? "show" : "hide"} onClick={() => { setSearchParams({ sort: "comment_count", order: "desc" }); setSortClicked(false) }}> comments </button>


                </section>
            </div>

            <div className="order-dropdown">
                <button className="order-dropbtn" onClick={() => { orderClicked ? setOrderClicked(false) : setOrderClicked(true) }}>order by</button>

                <section className="order-dropdown-content">

                    <button className="link" id={orderClicked ? "show" : "hide"} onClick={() => { setSearchParams({ sort: sortQuery, order: "asc" }); setOrderClicked(false) }}> asc </button>

                    <button className="link" id={orderClicked ? "show" : "hide"} onClick={() => { setSearchParams({ sort: sortQuery, order: "desc" }); setOrderClicked(false) }}> desc </button>

                </section>
            </div>
        </div>
    )
}