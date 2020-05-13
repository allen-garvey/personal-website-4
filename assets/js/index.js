import { initEmail } from './email';
import { initRouter } from './routing';
import { initLazyImageLoading } from './lazy-image-loading';

import css from '../sass/index.scss';

initEmail();
initRouter();
initLazyImageLoading();