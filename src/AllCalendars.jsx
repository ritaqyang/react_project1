import { MonthlyDisplay } from "./MonthlyDisplay";

export function AllCalendars(){
    return(
        <>
        <div className="calendar-container">
            <MonthlyDisplay />
            <MonthlyDisplay />
        
        </div>
        <div className="calendar-container">
            <MonthlyDisplay />
            <MonthlyDisplay />
        </div>
        </>
    )
}