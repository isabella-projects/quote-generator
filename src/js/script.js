import { QuoteFetcher } from './controller/QuoteFetcher.js';
import { Tweet } from './controller/Tweet.js';
import { Misc } from './controller/Misc.js';

import '../styles/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    const quoteFetcher = new QuoteFetcher();
    quoteFetcher.fetchQuote();

    const tweet = new Tweet();

    const misc = new Misc();
    misc.getCurrentYear();
});
