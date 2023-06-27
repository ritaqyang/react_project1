import { MonthlyDisplay } from "./components /box/MonthlyDisplay/MonthlyDisplay";

const AllCalendars = () => {
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

export default AllCalendars;