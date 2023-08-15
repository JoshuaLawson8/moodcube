import { Hud, OrthographicCamera } from '@react-three/drei'
import { Color, Matrix4, Vector3 } from 'three'
import { useRef } from 'react'
import { Object3DNode, extend, useFrame, useThree } from '@react-three/fiber'
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import epic_slap from '../../fonts/epic_slap.json'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

extend({ TextGeometry });

var material = {
    uniforms: {
        color1: {
            value: new Color("red")
        },
        color2: {
            value: new Color("orange")
        }
    },
    vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,
    fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;
  
    varying vec2 vUv;
    
    void main() {
      
      gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
    }
  `
};

export default function Logo({ renderPriority = 1, matrix = new Matrix4() }) {


    const font = new FontLoader().parse(epic_slap)
    const { viewport } = useThree()
    const ref = useRef()
    const camRef = useRef()
    useFrame(({ mouse }) => {
        const x = (mouse.x * viewport.width) / 50
        const y = (mouse.y * viewport.height) / 50
        // @ts-ignore
        ref.current.rotation.set(y, x, 0)
        // @ts-ignore
        camRef.current.position.set(0, 80 - document.body.scrollHeight * .5, 1000)
        // @ts-ignore
        ref.current.geometry.computeBoundingBox();
        // @ts-ignore
        const boundingBox = ref.current.geometry.boundingBox;
        const center = new Vector3();

        boundingBox.getCenter(center);
        // @ts-ignore
        ref.current.geometry.translate(-center.x, -center.y, -center.z);
    })

    return (
        <Hud renderPriority={renderPriority}>
            <OrthographicCamera makeDefault ref={camRef} />
            <mesh onClick={() => console.log("ouch")}
                // @ts-ignore
                ref={ref}>
                <textGeometry args={['Mood Cube', { font, bevelEnabled: true, bevelSize: 1, size: 80, height: 1 }]} />
                <shaderMaterial attach="material" args={[material]} />
            </mesh>
            <ambientLight intensity={1} />
            <pointLight position={[200, 200, 100]} intensity={0.5} />
        </Hud>
    )
}

declare module "@react-three/fiber" {
    interface ThreeElements {
        textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
    }
}