import { useState } from "react";

export default function SortCollapse ({children}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((visibility) => {return  !visibility})
  }

  return (
    <>
    <button className="sort-collapse" onClick={handleClick}> filter ☰</button>
    {isVisible && children}
    </>
  )


}


  
