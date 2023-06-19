import react, { useState} from 'react';
import {Box} from "./Box"; 

export function WeeklyTracker(){
    
  

  
  return (
      <>
       <div className='container'>
         <box />
         <div className={colorClasses} onClick={handleClick}>Tuesday</div>
         <div className='box-3'>Wednesday</div>
         <div className='box-4'>Thursday</div>
         <div className='box-5'>Friday</div>
         <div className='box-6'>Saturday</div>
         <div className='box-7'>Sunday</div>

       </div>
       
      </>
    )
  }