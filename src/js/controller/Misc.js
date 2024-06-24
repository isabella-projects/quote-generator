export class Misc {
    constructor() {
        this.year = document.getElementById('year');
    }

    getCurrentYear() {
        this.year.textContent = new Date().getFullYear();
    }
}
