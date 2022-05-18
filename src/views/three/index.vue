<template>
  <div id="webgl-output" class="threeDiv"></div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import {
//   MOUSE
// } from 'three'
export default {
  name: 'index',
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // 创建场景
      const scene = new THREE.Scene()
      // 创建摄像机
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000)
      // 创建渲染器
      const renderer = new THREE.WebGLRenderer()
      // 设置渲染器的初始颜色
      renderer.setClearColor(new THREE.Color(0xeeeeee))
      // 设置输出canvas画面的大小
      renderer.setSize(window.innerWidth, window.innerHeight)
      // 设置渲染物的阴影
      renderer.shadowMapEnabled = true
      // renderer.shadowMap.enabled = true
      // renderer.shadowMap.type = THREE.PCFSoftShadowMap
      // 显示三维坐标系
      // const axes = new THREE.AxesHelper(20)
      const axes = new THREE.AxisHelper(20)
      // 添加坐标系到场景中
      scene.add(axes)
      // 创建地面的几何体
      const planeGeometry = new THREE.PlaneGeometry(60, 20)
      // 给地面物体上色
      const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc })
      // 创建地面
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      // 物体位置
      plane.rotation.x = -0.5 * Math.PI
      plane.position.x = 0
      plane.position.y = 0
      plane.position.z = 0
      plane.castShadow = true
      // 接收阴影
      plane.receiveShadow = true
      // 将地面添加到场景中
      scene.add(plane)
      // 添加立方体
      const cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
      const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 })
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
      cube.position.x = 0
      cube.position.y = 4
      cube.position.z = 2
      // 对象是否渲染到阴影贴图中
      cube.castShadow = true
      // 将立方体添加到场景中
      scene.add(cube)
      // 创建球体
      const sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
      const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 })
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
      sphere.position.x = 10
      sphere.position.y = 4
      sphere.position.z = 0
      // 对象是否渲染到阴影贴图中
      sphere.castShadow = true
      // 将立方体添加到场景中
      scene.add(sphere)
      // 创建聚光灯
      const spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.set(130, 130, -130)
      spotLight.castShadow = true
      spotLight.angle = Math.PI / 4
      spotLight.shadow.penumbra = 0.05
      spotLight.shadow.mapSize.width = 1024
      spotLight.shadow.mapSize.innerHeight = 1024
      // 添加聚光灯
      scene.add(spotLight)
      // 定位相机，并且指向场景中心
      camera.position.x = 30
      camera.position.y = 30
      camera.position.z = 30
      camera.lookAt(scene.position)
      document.getElementById('webgl-output').appendChild(renderer.domElement)
      renderer.render(scene, camera)
      const controls = new OrbitControls(camera, renderer.domElement)
      // 监听控制器的鼠标事件，执行渲染内容
      controls.addEventListener('change', () => {
        renderer.render(scene, camera)
      })
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
