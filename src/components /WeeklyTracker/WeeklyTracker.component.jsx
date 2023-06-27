import react, { useState } from 'react';
import {Box} from "../box/Box.component"; 

export function WeeklyTracker(){
    
  
  return (
      <>
      
       <div className='container'>
         <Box day="Mon" />
         <Box day="Tue"/>
         <Box day="Wed"/>
         <Box day="Thur"/>
         <Box day="Fri"/>
         <Box day ="Sat"/>
         <Box day ="Sun"/>
         
       </div>
       
      </>
    )
  }