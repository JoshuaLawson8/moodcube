import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Edges } from "@react-three/drei"

function Cube({ position, size, color }) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events

    return (
        <mesh
            position={position}
            scale={1}>
            <boxGeometry args={[size[0], size[1], size[2]]} />
            <meshStandardMaterial transparent opacity={.2} color={color} />
            <Edges />
        </mesh>
    )
}


export default Cube;