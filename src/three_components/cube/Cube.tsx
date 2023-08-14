//import { Edges } from "@react-three/drei"
import { Vector3 } from 'three'

interface CubeProps {
    position: number[],
    size: [number, number, number],
    color: string
}

function Cube({ position, size, color }: CubeProps) {
    return (
        <mesh
            position={new Vector3(...position)}>
            <boxGeometry args={[...size]} />
            <meshStandardMaterial depthTest={false} transparent opacity={.2} color={color} />
            {/* <Edges /> // this highlights the edges of the cubes in black.*/}
        </mesh>
    )
}


export default Cube;