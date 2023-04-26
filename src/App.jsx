
import { useRef } from 'react';
import './App.css';

function App() {
  const imgRef=useRef();
  const canvasRef=useRef();
  return (
    <div className="App">
     <img ref={imgRef} src="" alt="" 
     width="940"
     height="650"
     />
     <canvas ref={canvasRef}  width="940" height="650"></canvas>
    </div>
  );
}

export default App;
