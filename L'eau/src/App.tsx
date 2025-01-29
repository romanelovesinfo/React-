
import './App.css'
import videobg from './assets/Ocean 4K Vidéo.mp4'
import fleche from './assets/fleche.png'
import biolo from './assets/bio.png'
import loutre from './assets/loutre.png'
import poub from './assets/poub.png'
import Photo from './components/photo'

function App() {
  return (
    <div> 
      <div class='bg'>
        <video src={videobg} autoPlay="autoplay" loop="infinite" muted></video>
        </div>
        
        <div class='Laboss'>

            <div id='titre'> 
           <h1>Tapery Oil</h1>
            <h3>Depuis 1991</h3>

           <img src={fleche}/>
           </div>

           <h1>For Ecology</h1>
           <div id='pict'>

           

           <Photo Titre='Meet our team' Image={<img src={biolo}></img>}> </Photo>
            <Photo Titre='Donate for help' Image={<img src={loutre}></img>}> </Photo>
            <Photo Titre='Participate' Image={<img src={poub}></img>}> </Photo>
            </div>
        </div>


        </div>


  )
}

export default App
