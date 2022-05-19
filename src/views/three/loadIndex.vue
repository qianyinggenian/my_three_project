<template>
  <div id="webgl-output" class="threeDiv"></div>
</template>

<script>
import * as THREE from 'three/build/three.module'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
let scene, camera, render, controls
// let loadedMesh, combinMesh
export default {
  name: 'index',
  mounted () {
    // this.init()
    this.initScene()
  },
  methods: {
    initScene () {
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000)
      render = new THREE.WebGLRenderer()
      // 设置渲染器的初始颜色
      render.setClearColor(new THREE.Color(0xeeeeee))
      render.setSize(window.innerWidth, window.innerHeight)
      render.shadowMap.enabled = true
      const axes = new THREE.AxesHelper(50)
      scene.add(axes)

      // 创建聚光灯
      const spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.set(0, 5000, 0)
      spotLight.castShadow = true
      spotLight.angle = Math.PI / 4
      spotLight.shadow.penumbra = 0.05
      spotLight.shadow.mapSize.width = 1024
      spotLight.shadow.mapSize.innerHeight = 1024
      // 添加聚光灯
      scene.add(spotLight)
      camera.position.x = 10
      camera.position.y = 100
      camera.position.z = 0
      // var loader = new GLTFLoader()
      const loader = new GLTFLoader()
      loader.setPath('static/img/')
      loader.load('dimian.gltf', function (gltf) {
        gltf.scene.traverse(function (child) {
          if (child.isMesh) {
            child.frustumCulled = false
            // 模型阴影
            child.castShadow = true
            // 模型自发光
            child.material.emissive = child.material.color
            child.material.emissiveMap = child.material.map
          }
        })
        scene.add(gltf.scene)
      })
      loader.load('humian.gltf', function (gltf) {
        gltf.scene.traverse(function (child) {
          if (child.isMesh) {
            child.frustumCulled = false
            // 模型阴影
            child.castShadow = true
            // 模型自发光
            child.material.emissive = child.material.color
            child.material.emissiveMap = child.material.map
          }
        })
        scene.add(gltf.scene)
      })
      loader.load('qiao.gltf', function (gltf) {
        gltf.scene.traverse(function (child) {
          if (child.isMesh) {
            child.frustumCulled = false
            // 模型阴影
            child.castShadow = true
            // 模型自发光
            child.material.emissive = child.material.color
            child.material.emissiveMap = child.material.map
          }
        })
        scene.add(gltf.scene)
      })

      camera.lookAt(scene.position)
      // scene.add(camera)
      document.getElementById('webgl-output').appendChild(render.domElement)
      render.render(scene, camera)
      controls = new OrbitControls(camera, render.domElement)
      // controls.addEventListener('change', renderScene)
      // 监听控制器的鼠标事件，执行渲染内容
      controls.addEventListener('change', () => {
        render.render(scene, camera)
      })
      // Load a glTF resource
      // loader.load(
      //   // resource URL
      //   'static/model/dimian.gltf',
      //   // called when the resource is loaded
      //   function (gltf) {
      //     console.log(gltf)
      //     scene.add(gltf.scene)
      //   },
      //   // called while loading is progressing
      //   function (xhr) {
      //     console.log((xhr.loaded / xhr.total * 100) + '% loaded')
      //   },
      //   // called when loading has errors
      //   function (error) {
      //     console.log(error)
      //     console.log('An error happened ' + error)
      //   }
      // )
    }
  }
}
</script>

<style lang="scss" scoped>
  .threeDiv {
    margin: 0;
    overflow: hidden;
  }
</style>
