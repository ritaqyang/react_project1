import "./styles.css"
import { WeeklyTracker } from "./WeeklyTracker"
import { NewTodoForm } from "./NewTodoForm"
import { MonthlyDisplay } from "./MonthlyDisplay"
import { AllCalendars } from "./AllCalendars"
import { EmailForm } from "./EmailForm"

export default function App(){
  return (
    <>
    <h1>Monthly Tracker</h1>
    <AllCalendars/>
   
    < NewTodoForm />
     
    <h1 className="header">Todo List</h1>
    <EmailForm />

    </>
  )

}