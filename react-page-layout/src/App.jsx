import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/header'
import Homepage from './assets/Homepage'
import SearchBar from './assets/searchbox'
import EmployeeListItem from './assets/EmployeeListItem'
import EmployeePage from './assets/Employeepage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Homepage />
    <Header/>
    <SearchBar/>
    <EmployeeListItem/>
    <EmployeePage/>
      </>
  )
}
export default App
