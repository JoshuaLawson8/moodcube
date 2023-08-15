import { extend } from '@react-three/fiber'
import { Text } from "troika-three-text";

extend({ Text });

function Planes(props) {
    return (
        <>
            <mesh><gridHelper args={[1, 10]}></gridHelper></mesh >
            <mesh rotation-x={1.57}><gridHelper args={[1, 10]}></gridHelper></mesh>
            <mesh rotation-z={1.57}><gridHelper args={[1, 10]}></gridHelper></mesh>
            <mesh position={[-.7, .03, 0]}>
                <text
                    text={"negative"}
                    fontSize={.05}
                    color={'black'}>
                </text>
            </mesh>
            <mesh position={[0, 0, -.55]}>
                <text
                    text={"negative"}
                    fontSize={.05}
                    color={'black'}>
                </text>
            </mesh>
            <mesh position={[0, -.5, 0]}>
                <text
                    text={"negative"}
                    fontSize={.05}
                    color={'black'}>
                </text>
            </mesh>
        </>
    )
}


export default Planes;