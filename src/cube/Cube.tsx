import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Edges } from "@react-three/drei"
import { Vector3 } from 'three'

interface CubeProps {
    position: number[],
    size: number[],
    color: string

}

function Cube({ position, size, color }: CubeProps) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events

    return (
        <mesh
            position={new Vector3(...position)}
            scale={1}>
            <boxGeometry args={[size[0], size[1], size[2]]} />
            <meshStandardMaterial transparent opacity={.2} color={color} />
            <Edges />
        </mesh>
    )
}


export default Cube;