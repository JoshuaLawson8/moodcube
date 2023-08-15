import './App.css';
import Cube from './three_components/cube/Cube'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Planes from './three_components/planes/Planes'
import { useDispatch } from 'react-redux'
import { addPoint, clearList } from './features/pointsList/pointsListSlice';

import Points from './three_components/points/Points';
import { useRef } from 'react';
import Logo from './three_components/logo/Logo';
import { DailyForm } from './three_components/overlay/DailyForm';

function App() {

  const dispatch = useDispatch()
  return (
    <>
      <div><button onClick={() => dispatch(addPoint(
        {
          uuid: crypto.randomUUID(),
          x: Math.random() - .5,
          y: Math.random() - .5,
          z: Math.random() - .5,
          blurb: '', 
          color: '#FF0000'
        }
      ))}>Add Point</button>
        <button onClick={() => dispatch(clearList())}>Clear List</button>
      </div>
      <div className='cubeHolder'>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Points />
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
            <Logo />
          </mesh>
          <OrbitControls />
        </Canvas>
      </div>
      <DailyForm />
    </>
  );
}

export default App