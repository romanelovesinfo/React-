
import './App.css'
import videobg from './assets/Ocean 4K Vidéo.mp4'
import fleche from './assets/fleche.png'

function App() {
  return (
    <div> 
      <div class='bg'>
        <video src={videobg} autoPlay="autoplay" loop="infinite"></video>
      
          <div id='titre'> 
          <h1>Tapery Oil</h1>
          <h3>Depuis 1991</h3>

          <img src={fleche}/>
        

          </div>
         

    </div>
  </div>

  )
}

export default App
