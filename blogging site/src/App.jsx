import './App.css'
import Add_form from './Componant/Add_form/Add_form'
import Home from './Pages/Home/Home'
import { Route,Routes } from 'react-router-dom'
import Showcard from './Pages/Show_card/Showcard'
import Card_details from './Componant/show_card_ind/Card_details'
function App() {


  return (
    <>
    <Routes>
    <Route path='/' element={ <Home></Home>}></Route>
      <Route path="/add" element={<Add_form H1_name="Blog form"></Add_form>}></Route>
      <Route path="/show" element={<Showcard></Showcard>}></Route>
      <Route path="/show/edit/:id" element={<Add_form H1_name="Blog Update form"></Add_form>}></Route>
      <Route path="/show/card/:id" element={<Card_details></Card_details>}></Route>
    </Routes>
     
    </>
  )
}

export default App
