
import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);


// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)
// const renderer = new THREE.WebGLRenderer();
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;



function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(300));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(700).fill().forEach(addStar);

// Background
window.onresize = window.onload = function() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
}
const spaceTexture = new THREE.TextureLoader().load('./imgs/space_bg.jpeg');
scene.background = spaceTexture;
// Sun
const sunTexture = new THREE.TextureLoader().load('./imgs/sun_texture.png');
const normalSunTexture = new THREE.TextureLoader().load('sun_texture.png');
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(30, 32, 32),
  new THREE.MeshStandardMaterial({
    map: sunTexture,
    normalMap: normalSunTexture,
  })
);
scene.add(sun);
sun.position.z = -60;
sun.position.y = 0;
sun.position.setX(20);
//Mercury
const mercuryTexture = new THREE.TextureLoader().load('./imgs/mercury.jpg');
const normalMercuryTexture = new THREE.TextureLoader().load('./imgs/mercury_texture.png');
const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(1.5, 32, 32),
  new THREE.MeshStandardMaterial({
    map: mercuryTexture,
    normalMap: normalMercuryTexture,
  })
);
scene.add(mercury);
mercury.position.z = -20;
mercury.position.y = 0;
mercury.position.setX(-10);
//venus
const venusTexture = new THREE.TextureLoader().load('./imgs/venus.jpg');
const normalVenusTexture = new THREE.TextureLoader().load('./imgs/venus_texture.png');
const venus = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: venusTexture,
    normalMap: normalVenusTexture,
  })
);
scene.add(venus);
venus.position.z = -20;
venus.position.y = 0;
venus.position.setX(-20);
//earth
const earthTexture = new THREE.TextureLoader().load('./imgs/earth.jpg');
const normalEarthTexture = new THREE.TextureLoader().load('./imgs/earth_texture.png');
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: earthTexture,
    normalMap: normalEarthTexture,
  })
);
scene.add(earth);
earth.position.z = -20;
earth.position.y = 0;
earth.position.setX(-35);
//mars
const marsTexture = new THREE.TextureLoader().load('./imgs/mars.jpg');
const normalmarsTexture = new THREE.TextureLoader().load('./imgs/mars_texture.png');
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(2.5, 32, 32),
  new THREE.MeshStandardMaterial({
    map: marsTexture,
    normalMap: normalmarsTexture,
  })
);
scene.add(mars);
mars.position.z = -20;
mars.position.y = 0;
mars.position.setX(-50);
//jupiter
const jupiterTexture = new THREE.TextureLoader().load('./imgs/jupiter.jpg');
const normalJupiterTexture = new THREE.TextureLoader().load('./imgs/jupiter_texture.png');
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(15, 32, 32),
  new THREE.MeshStandardMaterial({
    map: jupiterTexture,
    normalMap: normalJupiterTexture,
  })
);
scene.add(jupiter);
jupiter.position.z = -20;
jupiter.position.y = 0;
jupiter.position.setX(-90);
//saturn
const saturnTexture = new THREE.TextureLoader().load('./imgs/saturnmap.jpg');
const normalSaturnTexture = new THREE.TextureLoader().load('./imgs/saturn_texture.png');
const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(35, 32, 32),
  new THREE.MeshStandardMaterial({
    map: saturnTexture,
    normalMap: normalSaturnTexture,
  })
);
scene.add(saturn);
saturn.position.z = -20;
saturn.position.y = 0;
saturn.position.x = -250;

//saturn ring
const saturnRingTexture = new THREE.TextureLoader().load('./imgs/saturnringcolor.jpg');
const normalRingTexture = new THREE.TextureLoader().load('./imgs/saturn_texture.png');
const saturnRing = new THREE.Mesh(
  new THREE.RingGeometry(39, 52, 32),
  new THREE.MeshStandardMaterial({
    map: saturnRingTexture,
    normalMap: normalSaturnTexture,
  })
);
scene.add(saturnRing);
saturnRing.position.z = -20;
saturnRing.position.y = 0;
saturnRing.position.x = -250;
saturnRing.rotation.x = -20;
saturnRing.rotation.y = -10;
//uranus
const uranusTexture = new THREE.TextureLoader().load('./imgs/uranusmap.jpg');
const normaluranusTexture = new THREE.TextureLoader().load('./imgs/uranus_texture.png');
const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(60, 32, 32),
  new THREE.MeshStandardMaterial({
    map: uranusTexture,
    normalMap: normaluranusTexture,
  })
);
scene.add(uranus);
uranus.position.z = 160;
uranus.position.y = 0;
uranus.position.x = -1000;
//neptune
const neptuneTexture = new THREE.TextureLoader().load('./imgs/neptunemap.jpg');
const normalneptuneTexture = new THREE.TextureLoader().load('./imgs/neptune_texture.png');
const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(60, 32, 32),
  new THREE.MeshStandardMaterial({
    map: neptuneTexture,
    normalMap: normalneptuneTexture,
  })
);
scene.add(neptune);
neptune.position.z = 400;
neptune.position.y = 0;
neptune.position.x = -1000;



function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  

  

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

function animate() {
  requestAnimationFrame(animate);

  sun.rotation.y += 0.005;
  mercury.rotation.y += 0.005;
  venus.rotation.y += 0.005;
  earth.rotation.y += 0.005;
  mars.rotation.y += 0.005;
  jupiter.rotation.y += 0.005;
  saturn.rotation.y += 0.005;
  saturnRing.rotation.z += 0.005;
  uranus.rotation.y += 0.005;
  neptune.rotation.y += 0.005;
  

  renderer.render(scene, camera);
}

animate();