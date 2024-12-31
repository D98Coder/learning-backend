import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { book } from './data/book.dto';
@Injectable()
export class BookService {
    public books: book[] = [];

  getBook() {
    return this.books;
  }
  adddBook(data: any) {
    data.id = uuidv4();
    this.books.push(data);
    return this.books;
  } 

  deleteBook(del: any) {
    this.books = this.books.filter(book => book.id !== del);
  return this.books;
  }

  updateBook(book : any): string {
    let index = this.books.findIndex((currentBook) => {
        return currentBook.id == book.id;
        // return index;
    });
    this.books[index] = book;
    return 'Book has been successfully update';
  }
}
