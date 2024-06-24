import axios from 'axios';

export class QuoteFetcher {
    constructor() {
        this.currentQuote = { quote: '', author: '' };
        this.quoteContainer = document.getElementById('quote-container');
        this.quoteElement = document.getElementById('quote');
        this.authorElement = document.getElementById('author');
        this.btn = document.getElementById('new-quote');
        this.loader = document.getElementById('loader');

        this._init();
    }

    _init() {
        this.btn.addEventListener('click', () => this.fetchAndDisplayQuote());
    }

    async fetchQuote() {
        const API = 'https://api.api-ninjas.com/v1/quotes';
        const API_KEY = import.meta.env.VITE_API_KEY;

        this.toggleLoading(true);

        try {
            const { data } = await axios.get(API, {
                headers: {
                    'X-Api-Key': API_KEY,
                    'Content-Type': 'application/json',
                },
            });

            const { quote, author } = data[0];
            this.currentQuote = { quote: quote, author: author };
            this.updateQuoteUI();
        } catch (error) {
            console.log(`Error while fetching data: ${error}`);
        } finally {
            this.toggleLoading(false);
        }
    }

    async fetchAndDisplayQuote() {
        await this.fetchQuote();
    }

    updateQuoteUI() {
        this.quoteElement.textContent = this.currentQuote.quote;
        this.authorElement.textContent = `— ${this.currentQuote.author}`;
    }

    toggleLoading(isLoading) {
        this.loader.hidden = !isLoading;
        this.quoteContainer.hidden = isLoading;
    }
}
