import { Component, OnInit } from '@angular/core';
import { PublisherControllerService } from '../../controllers/publisher-controller.service';
import Publisher from '../../types/publisher';
import { CommonModule, NgFor } from '@angular/common';
import { BookControllerService } from '../../controllers/book-controller.service';
import Book from '../../types/book';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  publisher: Publisher[] = [];

  public authors: string = '';
  public form_Id: string = '';
  public book: Book = new Book("", 0, "", "", []);

  constructor(
    private servPublisher: PublisherControllerService,
    private servBook: BookControllerService,
    private router: Router) { }

   ngOnInit() {
    this.publisher = this.servPublisher.getPublishers();
   }

   addBook = async () => {
    this.book.authors = this.authors.split(/\r?\n/);
    this.book.publisherId = parseInt(this.form_Id);
    
    await this.servBook.addBook(this.book);
    
    this.router.navigateByUrl('/list');
   }

  getName = (pubId: number) => {
    return this.servPublisher.getPublisherById(pubId).name;
  }
}
