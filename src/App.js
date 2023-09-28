import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListOfTasks from './components/ListOfTasks'
import Header from './components/Header'
import Footer from './components/Footer'
import AddTask from './components/AddTask'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' Component={ListOfTasks}></Route>
          <Route exact path='/tasks' Component={ListOfTasks}></Route>
          <Route exact path='/add-task' Component={AddTask}></Route>
          <Route exact path='/update-task/:id' Component={AddTask}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App