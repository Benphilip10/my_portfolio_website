import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";

import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {

  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <group>
    <mesh>
         <hemisphereLight intensity = {3.15} groundColor="black" /> 
        <pointLight intensity={5} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={5}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive 
          object={computer.scene}
          scale= {isMobile? 0.55 : 0.70}
          position={isMobile ? [-3, -4.0, -1.6] : [0, -3.20, -3.8]}
          rotation ={[-0.01, -0.2, -0.1]}
        />
      </mesh>
      </group>
     )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);


    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

    return (
      <Canvas
        frameloop="demand"
        shadows
        camera={{position:[20, 3, 5], fov: 25}}
        gl= {{preserveDrawingBuffer: true}}
      >
    
        <Suspense fallback={<CanvasLoader/>}>

            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile}/>
        </Suspense>

        <Preload all/>
      </Canvas>
    )


}

export default ComputersCanvas