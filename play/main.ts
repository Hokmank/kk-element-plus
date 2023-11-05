import { createApp } from 'vue';
import App from './app.vue';
import kklibrary from '@kklibrary/components';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'virtual:uno.css';
const app = createApp(App);
app.use(ElementPlus);
app.use(kklibrary);
app.mount('#app');
