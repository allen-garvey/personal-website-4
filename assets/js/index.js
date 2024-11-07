import { initEmail } from './email';
import { initSectionsNav } from './sections-nav';
import { initMusicHall } from './music-hall/index';
import { initializeDisplayAlbumLightbox } from './artour/album-carousel';

import css from '../sass/index.scss';

initEmail();
initSectionsNav();
initMusicHall();
initializeDisplayAlbumLightbox();
