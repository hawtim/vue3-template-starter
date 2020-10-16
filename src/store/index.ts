import { createStore } from 'vuex'

interface State {
  username: string
}
export default createStore({
  state(): State {
    return {
      username: '鹿鸣'
    }
  }
})
