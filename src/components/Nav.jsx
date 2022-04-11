import { Link } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"
import { ThemeContext } from "../contexts/Theme"
import { useContext } from "react"

export default function Nav() {
    const { loggedInUser } = useContext(UserContext)
    const { toggle, toggleTheme } = useContext(ThemeContext)

    return (
        <nav>
            <aside>
                <img className="user-img-avatar" src={loggedInUser.avatar_url} alt="logged in user" />
                WELCOME {loggedInUser.username}
            </aside>
            <section>
                <button onClick={toggleTheme}> {toggle ? " ☼  " : "  ☾ "}</button>
                <Link to="/" className="home">Home</Link>
            </section>

        </nav>
    )
}