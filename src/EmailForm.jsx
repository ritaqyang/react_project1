import React, { useRef } from 'react';

export function EmailForm(){
    const emailRef = useRef(); 
    function submitFormHandler(event){
        event.preventDefault(); 
        const enteredEmail = emailRef.current.value; 
    }
    return(
        <>
        <form onSubmit={submitFormHandler}>
            <label htmlFor="">Enter your email here</label>
            <input 
                ref={emailRef} 
                type="email"
                id="email"></input>
            
            <button>save</button>
        </form>
    </>
    );
}

