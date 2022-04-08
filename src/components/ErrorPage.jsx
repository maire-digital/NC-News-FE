import { Link } from "react-router-dom"

export default function ErrorPage () {

    return ( 
    <section className="error-msg">
        <h1>Oops!</h1>
        <dt>Something's gone wrong...</dt>
        <Link to="/" className="link">back to safety</Link>

    </section>
  


    )
}