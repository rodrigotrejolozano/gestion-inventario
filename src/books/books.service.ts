import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  private getId(): number {
    return this.books.length + 1;
  }

  create(createBookDto: CreateBookDto): Book {
    const book: Book = new Book(
      this.getId(),
      createBookDto.title,
      createBookDto.author,
      createBookDto.year,
    );
    this.books.push(book);
    return book;
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return book;
  }

  remove(id: number): Book {
    const book = this.findOne(id);
    this.books = this.books.filter((book) => book.id !== id);
    return book;
  }
}
