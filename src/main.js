import { createApp, nextTick } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)
app.use(router)

router.isReady().then(() => {
  AOS.init({
    duration: 700,
    once: true,
    offset: 80,
    easing: 'ease-out-cubic',
  })
})

router.afterEach(() => {
  nextTick(() => {
    AOS.refreshHard()
  })
})

app.mount('#app')
