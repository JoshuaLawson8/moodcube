import React from 'react';
import './App.css';
import Cube from './cube/Cube'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Planes from './cube/Planes'
import { useSelector, useDispatch } from 'react-redux'
import { addPoint } from './features/pointsList/pointsListSlice';
import { RootState } from './store';
import { CubePoint } from './types';

function App() {

  const pointList = useSelector((state: RootState) => state.pointsListSlice.pointsList)
  const dispatch = useDispatch()
  const payload: CubePoint = {
    uuid: "undefined",
    x: 1,
    y: 2,
    z: 3,
    blurb: '',
    color: '#'
  }
  return (
    <>
      <div><button onClick={() => dispatch(addPoint(payload))}>Add Point</button></div>
      <div className='cubeHolder'>
        <Canvas>
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
