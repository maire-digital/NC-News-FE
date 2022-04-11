import { useState } from "react";

export default function SortCollapse ({children}) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible((visibility) => {return  !visibility})
  }

  return (
    <>
    <button className="sort-collapse" onClick={handleClick}> sort ☰</button>
    {isVisible && children}
    </>
  )


}


  