import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import GameInform from "./components/GameInform.vue";
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)
// const  app = createApp(GameInform)
app.use(MotionPlugin)

app.mount('#app')
