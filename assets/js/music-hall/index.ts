import { createApp } from 'vue';
import App from './components/page.vue';

export const initMusicHall = () => {
    createApp(App).mount('#music-playlist');
};
