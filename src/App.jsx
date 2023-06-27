import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Todo from './routes/new-to-do/todo.component';
import { Outlet, Link } from 'react-router-dom'; 
import Home from './routes/home/home.component';

const Navigation = () => {
  return (
    <Fragment>
      
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <div>Logo</div>

        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/Todo'>
            New To-do's 
          </Link>
        </div>
      </div>


      <Outlet />
    

    </Fragment>

  )
}


const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='Todo' element={<Todo />} />

      </Route>
    </Routes>
  )
};

export default App; 