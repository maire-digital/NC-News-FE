import { useState } from "react";

export default function Collapse ({children}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((visibility) => {return  !visibility})
  }

  return (
    <>
    {isVisible && children}
    <button className="collapse" onClick={handleClick}> {isVisible? "Hide comments" : "Show comments"} </button>
    </>
  )


}


// const Expandable = ({ children }) => {
//     const [isOpen, setIsOpen] = useState(false);
  
//     const toggleOpen = () => setIsOpen((currOpen) => !currOpen);
  
//     return (
//       <div>
//         <button onClick={toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
//         {isOpen && children}
//       </div>
//     );
//   };
  