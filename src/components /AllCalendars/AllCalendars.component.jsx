import { MonthlyDisplay } from "./components /box/MonthlyDisplay/MonthlyDisplay";

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