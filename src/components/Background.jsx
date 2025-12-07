import * as THREE from 'three';
import { useEffect, useRef } from 'react';

const ParallaxBackground = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  // helper: create a soft radial gradient texture as a glow sprite
  const createGlowTexture = (color = '#00e6ff', size = 256) => {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');

    // fill transparent
    ctx.clearRect(0, 0, size, size);

    // radial gradient
    const grad = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2
    );
    // inner bright
    grad.addColorStop(0, color);
    // mid soft
    grad.addColorStop(0.2, color);
    // outer fade
    grad.addColorStop(0.55, 'rgba(0,0,0,0.18)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const isSmall = window.innerWidth < 900;

    // Scene + camera + renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = isSmall ? 60 : 40;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    // stronger color reproduction
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.setClearColor(0x000000, 1);
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.pointerEvents = 'none';

    // ensure container is black
    containerRef.current.style.background = '#000000';
    containerRef.current.appendChild(renderer.domElement);

    // root group for parallax
    const root = new THREE.Group();
    scene.add(root);

    // --- Stars (points) ---
    const starCount = isSmall ? 300 : 800;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3 + 0] = (Math.random() - 0.5) * 600; // x
      starPositions[i3 + 1] = (Math.random() - 0.5) * 400; // y
      starPositions[i3 + 2] = (Math.random() - 0.5) * 600; // z
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

    const starMat = new THREE.PointsMaterial({
      size: isSmall ? 0.6 : 1.2,
      color: 0x88f7ff,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(starGeo, starMat);
    root.add(stars);

    // --- Neon spheres (glowing round items) ---
    const spheres = [];
    const orbiters = [];
    const neonColor = new THREE.Color(0x00e6ff);

    const sphereCount = isSmall ? 3 : 6;
    // precreate glow texture once
    const glowTex = createGlowTexture('#00e6ff', 512);

    for (let i = 0; i < sphereCount; i++) {
      const radius = 8 + i * (isSmall ? 9 : 12);
      const size = (isSmall ? 2.2 : 3.2) + i * 0.4;
      const speed = (0.2 + i * 0.06) * (i % 2 === 0 ? 1 : -1);
      const angle = Math.random() * Math.PI * 2;

      // main sphere (MeshStandardMaterial with stronger emissive)
      const mat = new THREE.MeshStandardMaterial({
        color: neonColor,
        emissive: neonColor,
        emissiveIntensity: 2.6, // stronger emissive
        metalness: 0.15,
        roughness: 0.1,
      });
      const geo = new THREE.SphereGeometry(size, 48, 48);
      const mesh = new THREE.Mesh(geo, mat);

      // halo mesh: larger soft mesh using MeshBasicMaterial with AdditiveBlending
      const haloMat = new THREE.MeshBasicMaterial({
        color: 0x00e6ff,
        transparent: true,
        opacity: 0.12 + (i * 0.02),
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const haloGeo = new THREE.SphereGeometry(size * 2.6, 32, 32);
      const halo = new THREE.Mesh(haloGeo, haloMat);

      // glow sprite (soft disk using canvas texture) for stronger bloom illusion
      const spriteMat = new THREE.SpriteMaterial({
        map: glowTex,
        color: 0xffffff,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(spriteMat);
      // sprite scale relative to sphere size for big glow
      sprite.scale.set(size * 6, size * 6, 1);

      // group them
      const group = new THREE.Group();
      group.add(mesh);
      group.add(halo);
      group.add(sprite);

      // initial orbit position
      group.position.set(Math.cos(angle) * radius, Math.sin(angle) * (radius * 0.6), -20 - i * 10);
      group.userData = { radius, angle, speed, baseZ: group.position.z, size };

      root.add(group);
      spheres.push(group);

      // a point light to reinforce glow (brighter than before)
      const pl = new THREE.PointLight(0x00e6ff, 1.2 + i * 0.2, 120, 2);
      pl.position.copy(group.position);
      pl.power = 60;
      scene.add(pl);
      orbiters.push({ group, light: pl });
    }

    // subtle ambient + rim
    const ambient = new THREE.AmbientLight(0xffffff, 0.08);
    scene.add(ambient);
    const rim = new THREE.DirectionalLight(0x66dfff, 0.35);
    rim.position.set(-1, 1, 1);
    scene.add(rim);

    // mouse & scroll handlers
    const onMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onScroll = () => {
      scrollRef.current = window.scrollY || window.pageYOffset || 0;
    };
    window.addEventListener('scroll', onScroll);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // animation loop
    const start = performance.now();
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      const t = (performance.now() - start) * 0.001;

      // stars drift
      stars.rotation.y += 0.0005;
      stars.rotation.x += 0.00025;
      starMat.opacity = 0.5 + 0.45 * (0.5 + 0.5 * Math.sin(t * 2.4)); // gentle twinkle

      // orbit spheres with glow and light updates
      spheres.forEach((g, i) => {
        const ud = g.userData;
        ud.angle += ud.speed * 0.01;
        const x = Math.cos(ud.angle) * ud.radius;
        const y = Math.sin(ud.angle) * (ud.radius * 0.55);
        const z = ud.baseZ + scrollRef.current * 0.02 * (i + 1);

        const mx = mouseRef.current.x * (isSmall ? 6 : 12);
        const my = -mouseRef.current.y * (isSmall ? 4 : 8);

        // smooth position interpolation
        g.position.x += (x + mx - g.position.x) * 0.09;
        g.position.y += (y + my - g.position.y) * 0.09;
        g.position.z += (z - g.position.z) * 0.06;

        // sprite always face camera, adjust scale for dynamic glow
        const sprite = g.children.find((c) => c.type === 'Sprite');
        if (sprite) {
          const pulse = 1 + Math.sin(t * (0.8 + i * 0.05) + i) * 0.08;
          sprite.scale.set(ud.size * 6 * pulse, ud.size * 6 * pulse, 1);
        }

        // rotation + pulse for the mesh and halo
        g.rotation.y += 0.003 + i * 0.002;
        const mesh = g.children.find((c) => c.type === 'Mesh' && c.geometry.type === 'SphereGeometry');
        if (mesh) {
          mesh.material.emissiveIntensity = 2.6 + Math.sin(t * 2 + i) * 0.3; // dynamic emissive
          mesh.scale.set(1 + Math.sin(t * (1 + i * 0.1)) * 0.02, 1 + Math.sin(t * (1 + i * 0.1)) * 0.02, 1 + Math.sin(t * (1 + i * 0.1)) * 0.02);
        }

        // move associated light with small flicker
        const orb = orbiters[i];
        if (orb && orb.light) {
          orb.light.position.copy(g.position);
          orb.light.intensity = 1.2 + Math.sin(t * 3 + i) * 0.25;
        }
      });

      // camera gentle follow
      const camZTarget = isSmall ? 60 - scrollRef.current * 0.02 : 40 - scrollRef.current * 0.02;
      camera.position.z += (camZTarget - camera.position.z) * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationRef.current);
      renderer.dispose();
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden',
        willChange: 'transform',
        background: '#000000',
      }}
    />
  );
};

export default ParallaxBackground;