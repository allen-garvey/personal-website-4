import { initEmail } from './email';
import { initMusicHall } from './music-hall/index';
import { initializeDisplayAlbumLightbox } from './artour/album-carousel';

import css from '../sass/index.scss';

initEmail();
initMusicHall();
initializeDisplayAlbumLightbox();
