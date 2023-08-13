import React, { useRef, useState } from 'react'
import { extend } from '@react-three/fiber'
import { Text } from "troika-three-text";

extend({ Text });

function Planes(props) {
    return (
        <>
            <mesh><gridHelper args={[1, 10]}></gridHelper>
                <mesh position={[-.7, .03, 0]}><text
                    text={"negative"}
                    fontSize={.05}
                    color={'black'}
                    textAlign={"left"}
                    anchorX='10%'
                    anchorY='1000'
                ></text></mesh>
            </mesh >
            <mesh rotation-x={11}><gridHelper args={[1, 10]}></gridHelper></mesh >
            <mesh position={[0, 0, -.55]}><text
                text={"negative"}
                fontSize={.05}
                color={'black'}
                textAlign={"left"}
                anchorX='10%'
                anchorY='1000'
            ></text></mesh>
            <mesh rotation-z={11}><gridHelper args={[1, 10]}></gridHelper></mesh >
            <mesh position={[0, -.5, 0]}><text
                text={"negative"}
                fontSize={.05}
                color={'black'}
                textAlign={"left"}
                anchorX='10%'
                anchorY='1000'
            ></text></mesh>
        </>
    )
}


export default Planes;