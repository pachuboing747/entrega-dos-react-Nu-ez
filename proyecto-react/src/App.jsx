import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./componentes/ItemDetail/ItemDetail"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
    <h1 className="titulo">Boca Shop</h1>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={"Productos Destacados"}/>}/>
      <Route path='/Productos/:id' element={<ItemListContainer/>}/>
      <Route path='/lista/:listId' element={<ItemDetailContainer/>}/>
      {/* <Route path='/Shorts' element={<ItemDetailContainer/>}/>
      <Route path='/Remeras' element={<ItemDetailContainer/>}/>
      <Route path='/Pantalones' element={<ItemDetailContainer/>}/>
      <Route path='/Buzos' element={<ItemDetailContainer/>}/>
      <Route path='/Camperas' element={<ItemDetailContainer/>}/>
      <Route path='/Medias' element={<ItemDetailContainer/>}/> */}
      <Route path='*' element={<h4>Error 404: Page not found</h4>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
