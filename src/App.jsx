import "./styles.css"
import { WeeklyTracker } from "./WeeklyTracker"
import { NewTodoForm } from "./NewTodoForm"
import { MonthlyDisplay } from "./MonthlyDisplay"

export default function App(){
  return (
    <>
    <h1>Monthly Tracker</h1>
    <MonthlyDisplay />
    < NewTodoForm />
     
     <h1 className="header">Todo List</h1>
    </>
  )

}