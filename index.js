import * as THREE from './three.js-master/build/three.module.js'
import {GLTFLoader} from './three.js-master/examples/jsm/loaders/GLTFLoader.js'
// console.log(THREE)

const canvas = document.querySelector('webgl')
var scene = new THREE.Scene();
const loader = new GLTFLoader()
loader.load('assets/wraith.glb', function(glb){
  console.log(glb)
  const root = glb.scene;
  root.scale.set(0.02,0.02,0.02)
  scene.add(root);
}, function(xhr){
  console.log((xhr.loaded/xhr.total*100)+ "% loaded")
}, function(error){
  console.log("an error occurred")
})

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(2,2,5)
scene.add(light)

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.5,
  1000
);
camera.position.z = 3;
scene.add(camera)

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.gammaOuput = true

document.body.appendChild(renderer.domElement);

//Cube
// var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshNormalMaterial({ color: 0x00aaff });

// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

function animate() {
  requestAnimationFrame(animate);

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();