import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { getResourcePath } from '@/common/js/utils'

const gltfLoader = new GLTFLoader()
// 这个是Threejs解析draco压缩之后的解析器,它从这里读取解析器JS
const dracoLoader = new DRACOLoader()

export function loadFan ({
  path,
  modelName
}) {
  gltfLoader.setPath(path)
  return new Promise((resolve, reject) => {
    dracoLoader.setDecoderPath(getResourcePath('tunnel', '/draco/'))
    gltfLoader.setDRACOLoader(dracoLoader)
    gltfLoader.load(modelName, function (gltf) {
      resolve(gltf)
    }, null, reject)
  })
}
