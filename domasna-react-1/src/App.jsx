
import './App.css'
import Header from './examples/header'
import Menu from './examples/menu'
import Button from './examples/button'
import Footer from './examples/footer'

function App() {
  
  return (
    <div>
      <Header/>
      <Menu/>
      <div className='buttons-app'>
      <Button/>
      <Button/>
      <Button/>
      </div>
      <Footer/>
    </div>
  )
    
  
}

export default App

