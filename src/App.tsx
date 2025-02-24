import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import './App.css'
import ListaCategorias from './components/categoria/ListaCategorias'
import FormCategoria from './components/categoria/FormCategoria'
import DeletarCategoria from './components/categoria/DeletarCategoria'

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[60vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App