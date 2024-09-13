import { Injectable } from '@angular/core';
import Book from "../types/book"
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  
      
export class BookControllerService {

  constructor(private http: HttpClient) { }

  // getBookById = (id: number): Book | undefined => {
  //   return BookControllerService.books.find((bok) => bok.publisherId === id);
  // }

  deleteBook = async (id: string) => {
    const url = "http://localhost:3030/books/delete/" + id;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        body: JSON.stringify({ _id: id })
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  // addBook = (book: Book): void => {
  //   book.bookId = BookControllerService.books.length + 1;
  //   BookControllerService.books.push(book);
  // }

  addBook = async (book: Book) => {
    const url = "http://localhost:3030/books/add";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book)
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      
    } catch (error) {
      console.error(error);
    }
  }

  getBooks = async (): Promise<Book[]> => {
    const url = "http://localhost:3030/books/get";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();

      const books: Book[] = json as Book[];
      return books;
    } catch (error) {
      console.error(error);
    }
    return [];
  }

}
