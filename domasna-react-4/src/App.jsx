import { useState } from 'react'
import './App.css'
import DynamicCounter from './components/DyCountes'
import Users from './components/RandomFecher'
import CatImg from './components/IMG'

function App() {
  const [catImages, setCatImages] = useState([])
  const fetchCatImages = async () => {
    const response = await fetch('');
      const data = await response.json();
      const url = data.map(catImage => catImage.url);
      setCatImages(url)
  }

  return (
    <>
    <DynamicCounter/>
    <Users/>
    <div className='cats'>
    <button onClick={fetchCatImages} style={{width: '400px',height: '400px',borderRadius: '50%',backgroundColor: 'gray'}}>Fetch Cat Images</button>
      {catImages.map((url , index)=> (
        <CatImg key={index} url={url}/>
      ))}
    </div>
    </>
  )
}
export default App