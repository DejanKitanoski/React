import { useState } from 'react'
import './App.css'
import DynamicCounter from './components/DyCountes'
import Users from './components/RandomFecher'
import CatImg from './components/IMG'

function App() {
  const [catImages, setCatImages] = useState([])
  const fetchCatImages = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
      const data = await response.json();
      const url = data.map(catImage => catImage.url);
      setCatImages(url)
  }

  return (
    <>
    <DynamicCounter/>
    <Users/>
    <button onClick={fetchCatImages} style={{width: '400px',height: '400px',borderRadius: '40%',backgroundColor: 'blue'}}> Cat Images</button>
    <div className='cats'>
    
      {catImages.map((url , index)=> (
        <CatImg key={index} url={url}/>
      ))}
    </div>
    </>
  )
}
export default App