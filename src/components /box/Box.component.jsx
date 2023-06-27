import react, { useState} from 'react';

export function Box(props){
    
  const[clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    setClicked(!clicked)
  }
  
  const colorClasses = clicked ? 'clicked' : 'box-'; 
  
  return (
      <>
       <div className={colorClasses} onClick={handleClick}>{props.day}</div>
      </>
  )
}