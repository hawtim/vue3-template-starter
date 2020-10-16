import * as VueRouter from 'vue-router'
import Todo from '../pages/Todo.vue'
import NotFound from '../pages/NotFound.vue'
import Message from '../pages/Message.vue'

const routes = [
  { path: '/todo', name: 'todo', component: Todo },
  { path: '/message', name: 'message', component: Message },
  // plan on directly navigating to the not-found route using its name
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
]
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes // short for `routes: routes`
})

export default router
