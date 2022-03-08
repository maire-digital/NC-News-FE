import {Link} from "react-router-dom"
import {UserContext} from "./UserContext"
import {useContext} from "react"



export default function Nav () {
    const {loggedInUser} = useContext(UserContext)
    return (
        <nav>
            <aside>   
            WELCOME {loggedInUser.username}
            <img className="user-img-avatar" src={loggedInUser.avatar_url} alt="logged in user" />
            </aside>
        
            <Link to="/">Home</Link>
        </nav>
    )
}