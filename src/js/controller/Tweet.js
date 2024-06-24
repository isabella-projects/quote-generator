export class Tweet {
    constructor() {
        this.quoteElement = document.getElementById('quote');
        this.authorElement = document.getElementById('author');
        this.twitterBtn = document.getElementById('twitter');

        this._initTweet();
    }

    _initTweet() {
        this.twitterBtn.addEventListener('click', () => this.tweetQuote());
    }

    tweetQuote() {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${this.quoteElement.textContent} - ${this.authorElement.textContent}`;
        window.open(twitterUrl, '_blank');
    }
}
