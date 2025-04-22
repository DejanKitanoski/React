import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Details from './components/detailsCountry'
import NotFound from './pages/NotFound'



  function App() {
    return (
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
  }
  


export default App
