import { MonthlyDisplay } from "./MonthlyDisplay";

export function AllCalendars(){
    return(
        <>
        <div className="calendar-container">
            <MonthlyDisplay />
            <MonthlyDisplay />
            <MonthlyDisplay />
            <MonthlyDisplay />
        </div>
       
        </>
    )
}