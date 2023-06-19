import { WeeklyTracker } from "./WeeklyTracker";


export function MonthlyDisplay(){
    return(
        <>
        <h4>Working out</h4>
        <div className="month-container">
        <WeeklyTracker />
        <WeeklyTracker />
        <WeeklyTracker />
        <WeeklyTracker />
        </div>
       
    
        </>
    )
}