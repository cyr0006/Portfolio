import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

//Scene Setup================================================================================================================================================
//renderer=====================================
const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement);

//camera===================================== 
const fov = 75;
const aspect = w/h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

//scene===================================== 
const scene = new THREE.Scene();

//OrbitControls=============================\
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.dampingFactor = 0.03;

//Objects=======================================================================

//solid mesh=====================================
//our shape
const earthMesh = new THREE.IcosahedronGeometry(1,12);
//Texture
const loader = new THREE.TextureLoader();
//our materials
const mat = new THREE.MeshStandardMaterial(
    {map: loader.load(myEarth)
    //flatShading: true;
    }
);

const mesh = new THREE.Mesh(earthMesh, mat);
earthMesh.add(mesh);


//sunLight=====================================
const sunLight = new THREE.DirectionalLight('rgba(255, 255, 255, 1)');
sunLight.position.set(-2,0.5,1.5);
scene.add(sunLight);

//specMap=====================================

//Animate=====================================
function animate(t=0){
    requestAnimationFrame(animate);
    //rotate solid
    mesh.rotation.y = t * 0.0001;

    //passing scene and camera into renderer
    renderer.render(scene, camera);
    controls.update();
}

animate();