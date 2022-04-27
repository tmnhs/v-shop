import '@/utils/helpers/vconsole';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { store } from './store';

// Vant
import Vant, { Lazyload, Dialog } from 'vant';
import 'vant/lib/index.less';

Dialog.setDefaultOptions({
  teleport: '.container',
});

// guard
import './router/guard';

// global
import './styles/index.less';
import LemonIMUI from 'lemon-imui';
import 'lemon-imui/dist/index.css';
// app
const app = createApp(App);

app.use(LemonIMUI);


app.use(Lazyload);
app.use(Vant);
app.use(router);
app.use(store);
app.mount('#app');
