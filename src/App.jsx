import "./styles.css"
import { WeeklyTracker } from "./components /WeeklyTracker/WeeklyTracker.component"
import { NewTodoForm } from "./NewTodoForm"
import { MonthlyDisplay } from "./components /box/MonthlyDisplay/MonthlyDisplay"
import { AllCalendars } from "./components /AllCalendars/AllCalendars.component"
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