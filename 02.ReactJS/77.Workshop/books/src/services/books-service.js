import { get } from '../data/crud';

class BooksService {
    constructor() {
        this.baseUrl = 'http://localhost:5000/book';
        this.allBooksUrl = `${this.baseUrl}/all`;
    }

    getTopRatedBooks() {
        return get(this.allBooksUrl);
    }
}

export default BooksService;
