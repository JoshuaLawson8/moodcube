import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Edges } from "@react-three/drei"
import { Color } from 'three'

function Planes(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    //useFrame((state, delta) => (ref.current.rotation.x += delta))
    // Return the view, these are regular Threejs elements expressed in JS

    return (
        <>
            <mesh><gridHelper args={[1, 10, 'red', 'red']}></gridHelper></mesh >
            <mesh rotation-x={11}><gridHelper args={[1, 10, 'green', 'green']}></gridHelper></mesh >
            <mesh rotation-z={11}><gridHelper args={[1, 10, 'blue', 'blue']}></gridHelper></mesh >
        </>
    )
}


export default Planes;