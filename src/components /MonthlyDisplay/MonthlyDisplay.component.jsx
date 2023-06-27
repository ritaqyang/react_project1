import { WeeklyTracker } from "../../../WeeklyTracker";


export function MonthlyDisplay(){
    return(
        <>
        
        <div className="month-container">
            <h4>Working out</h4>
            <WeeklyTracker />
            <WeeklyTracker />
            <WeeklyTracker />
            <WeeklyTracker />
        </div>
       
    
        </>
    )
}