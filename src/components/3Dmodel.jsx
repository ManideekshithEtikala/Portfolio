import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useEffect, useRef } from 'react';

const ThreeDModel = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const animationIdRef = useRef(null);
  const controlRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    sceneRef.current = scene;

    camera.position.set(2, 1.5, 3);
    camera.lookAt(0, 1, 0);
    
    const control = new OrbitControls(camera, renderer.domElement);
    control.target.set(0, 1, 0);
    control.enableDamping = true;
    control.dampingFactor = 0.05;
    control.autoRotate = true;
    control.autoRotateSpeed = 3;
    control.enableZoom = false;
    control.enablePan = false;
    control.minPolarAngle = Math.PI / 2;
    control.maxPolarAngle = Math.PI / 2;
    controlRef.current = control;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
    directionalLight.position.set(8, 12, 8);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight2.position.set(-8, -8, -8);
    scene.add(directionalLight2);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      control.update();
      renderer.render(scene, camera);
    };

    animate();

    // Load model
    const loader = new GLTFLoader();
    console.log('Loading model from: /Laptop/scene.gltf');
    
    loader.load(
      '/Laptop/scene.gltf',
      (gltf) => {
        console.log('Model loaded successfully:', gltf);
        const object = gltf.scene;
        object.scale.set(3, 3, 3);
        object.position.set(0, 1.2, 0);
        scene.add(object);
        console.log('Model added to scene');
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total * 100).toFixed(2) + '%');
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current && containerRef.current && containerRef.current.contains(rendererRef.current.domElement)) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      id="3dmodel-container" 
      style={{ 
        width: '100%', 
        height: '100%', 
        minHeight: '700px'
      }}
    />
  );
};

export default ThreeDModel;