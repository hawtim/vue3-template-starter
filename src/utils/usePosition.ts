// usePosition.js
import { reactive, toRefs, onMounted, onUnmounted } from 'vue'
import { throttle } from '../utils'

const usePosition = () => {
  const position = reactive({
    x: 0,
    y: 0
  })

  const updatePosition = (event: MouseEvent) => {
    if (!event) return
    const { pageX, pageY } = event
    position.x = pageX
    position.y = pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', throttle(updatePosition, 30, 100))
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', throttle(updatePosition, 30, 100))
  })

  return toRefs(position) //必须使用toRefs方式，用的时候使用解构也是响应式的
}

export default usePosition
