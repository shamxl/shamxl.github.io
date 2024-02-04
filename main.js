import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { TextPlugin } from "gsap/TextPlugin"
import gsap from "gsap"

const width = window.innerWidth
const height = window.innerHeight

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100)
camera.position.set (0, 0, 20)


const sphereGeometry = new THREE.SphereGeometry(3, 64, 32)
const sphereMaterial = new THREE.MeshStandardMaterial({
	color: "#68d6ce"
})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

const light = new THREE.PointLight(0xdbefff, 2, 100)
light.position.set(50, 50, 10)
scene.add(light);

scene.add(sphere)

const renderer = new THREE.WebGLRenderer({antialias: true})
const canvas = document.querySelector(".threejs-container")
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(width, height)
canvas.append(renderer.domElement)



const controls = new OrbitControls(camera, canvas)
controls.enablePan = false
controls.enableZoom = false
controls.enableDamping = true
controls.autoRotate = true
controls.autoRotateSpeed = 5
function loopRender () {
	requestAnimationFrame(loopRender)

	controls.update()
	renderer.render(scene, camera)
}

const textElement = document.querySelector(".about")
const text = "Passionate full-stack developer with a knack for turning innovative ideas into seamless, functional solutions. Dedicated to creating robust and user-friendly applications that elevate the digital experience."

gsap.registerPlugin(TextPlugin)

gsap.to(textElement, {
	duration: 10,
	text: text,
	padSpace: true
})

loopRender()
