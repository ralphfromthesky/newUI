import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Main from './layout/Main.vue'
import router from './router'
import  NewPage from './layout/NewPage.vue'
import store from './store/store'


const app = createApp(App)
app.component("Main", Main)
app.component("NewPage", NewPage)

app.use(router)
app.use(store)


app.mount('#app')
// createApp(App).mount('#app')

