import { useState } from "react";

export default function Collapse ({children}) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible((visibility) => {return  !visibility})
  }

  return (
    <>
    <button className="collapse" onClick={handleClick}> {isVisible? "Hide comments" : "Show comments"} </button>
    {isVisible && children}
    </>
  )


}


  