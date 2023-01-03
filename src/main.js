import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import Home from './view/Home.vue'
import Add_Book from './view/Add_Book.vue'
import './style.css'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name:'Home',
            component: Home
        },
        {
            path: '/Add_Book',
            name: 'Add_Book',
            component: Add_Book
        }
    ]
})

createApp(App)
.use(router)
.mount('#app')
