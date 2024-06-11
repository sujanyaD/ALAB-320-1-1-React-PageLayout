import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './assets/app2.css'
import Header from './components/Header'
import Homepage from './components/Homepage'
// import SearchBar from './components/Searchbox'
// import EmployeeListItem from './components/EmployeeListItem'
// import EmployeePage from './components/EmployeePage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1>hello</h1> */}
    
    <Homepage />
    {/* <Header/> */}
    {/* <SearchBar/> */}
    {/* <EmployeeListItem/> */}
    {/* <EmployeePage/> */}
     
      </>
  )
}
export default App
