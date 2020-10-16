import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import './assets/index.css'
import Antd from 'ant-design-vue'

// import { Button } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css' // Per Ant Design's docs

// Create and mount the root instance.
const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)
app.use(Antd)
// app.use(Button)
app.mount('#app')
