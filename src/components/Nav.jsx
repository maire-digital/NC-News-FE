import {Link} from "react-router-dom"
import {UserContext} from "../contexts/UserContext"
import {ThemeProvider} from "../contexts/Theme"
import {useContext} from "react"

export default function Nav () {
    const {loggedInUser} = useContext(UserContext)
    return (
        <nav>
            <aside>              
            <img className="user-img-avatar" src={loggedInUser.avatar_url} alt="logged in user" />
            WELCOME {loggedInUser.username}
            </aside>
            <section>    
            <Link to="/" className="home">Home</Link>
            {/* <button className="toggle-theme"> switch theme </button> */}
            </section>
        
        </nav>
    )
}