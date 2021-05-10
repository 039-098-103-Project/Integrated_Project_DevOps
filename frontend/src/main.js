import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import NavigationBar from '@/components/NavigationBar.vue'
import Footer from '@/components/Footer.vue'
import NavBarInProducts from '@/components/NavBarInProducts.vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap/dist/js/bootstrap'

const app = createApp(App).use(router)
app.component('navbar', NavigationBar)
app.component('Footer', Footer)
app.component('navProducts', NavBarInProducts)
app.mount('#app')