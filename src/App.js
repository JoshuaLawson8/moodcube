import './App.css';
import Cube from './cube/Cube.js'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Planes from './cube/Planes';

function App() {
  return (
    <>
      <div className='cubeHolder'>
        <Canvas orthographic>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <mesh
            scale={2.5}
          >
            <Cube position={[.25, .25, .25]} size={[.5, .5, .5]} color={'green'} />
            <Cube position={[.25, .25, -.25]} size={[.5, .5, .5]} color={'yellow'} />
            <Cube position={[.25, -.25, .25]} size={[.5, .5, .5]} color={'yellow'} />
            <Cube position={[.25, -.25, -.25]} size={[.5, .5, .5]} color={'red'} />
            <Cube position={[-.25, .25, .25]} size={[.5, .5, .5]} color={'yellow'} />
            <Cube position={[-.25, .25, -.25]} size={[.5, .5, .5]} color={'red'} />
            <Cube position={[-.25, -.25, .25]} size={[.5, .5, .5]} color={'red'} />
            <Cube position={[-.25, -.25, -.25]} size={[.5, .5, .5]} color={'blue'} />
            <Planes />
          </mesh>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default App;
