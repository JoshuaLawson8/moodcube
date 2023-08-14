import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { Vector3 } from 'three';

const Points = () => {
    const pointList = useSelector((state: RootState) => state.pointsListSlice.pointsList)

    return (<>
        <mesh>
            {pointList.map((point) =>
                <mesh key={point.uuid} position={new Vector3(point.x, point.y, point.z)}>
                    <sphereGeometry args={[.02, 30, 30]} />
                    <meshStandardMaterial depthTest={false} transparent opacity={.5} color={"red"} />
                </mesh>
            )}
        </mesh>
    </>);
}

export default Points;