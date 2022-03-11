import * as api from "../Api"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export default function CommentDeleter({comment_id, author, isDeleted, setIsDeleted}) {

    const {loggedInUser} = useContext(UserContext)
    const isEnabled = author === loggedInUser.username

    function handleClick() {
        if (isEnabled) {

            api.deleteComment(comment_id)
                .then(() => {
                    setIsDeleted(true)
                })
                .catch(() => {
                    alert("sorry! please try again")})
            setIsDeleted(false)}
        }   

    return (
        <button id={isEnabled ? "show" : "hide"} onClick={() => {
        handleClick()
        }}>{"Delete"}</button>
    )
}