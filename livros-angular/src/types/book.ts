export class Book {
    _id: string;
    publisherId: number;
    title: string;
    synopsis: string;
    authors: string[];

    constructor(
        _id: string,
        publisherId: number,
        title: string,
        synopsis: string,
        authors: string[]) {

        this._id = _id;
        this.publisherId = publisherId;
        this.title = title;
        this.synopsis = synopsis;
        this.authors = authors;
    }
}

export const isBook = (book: any): book is Book => {
    return book && (
        typeof book._id === 'string' &&
        typeof book.title == 'string' &&
        Array.isArray(book.authors) &&
        typeof book.publisherId === 'number' &&
        typeof book.synopsis === 'string'
    )
}

export const isBookArray = (bookArr: any): bookArr is Book[] => {
    for (let i = 0; i < bookArr.length; i++) {
        if (!isBook(bookArr[i])) {
            return false;
        }
    }

    return true;
}

export default Book;