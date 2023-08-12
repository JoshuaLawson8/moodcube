import './App.css';
import Cube from './cube/Cube.js'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Planes from './cube/Planes';
function App() {
  return (
    <>
      <div className='cubeHolder'>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Cube position={[0, 0, 0]} />
          <Planes />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default App;
