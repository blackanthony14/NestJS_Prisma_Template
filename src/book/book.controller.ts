import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from '@prisma/client';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.getAllBooks();
  }

  @Get(':id')
  async getBookById(@Param('id') id: string): Promise<Book | null> {
    return this.bookService.getBookById(Number(id));
  }

  @Post()
  async createBook(@Body() data: Book): Promise<Book> {
    return this.bookService.createBook(data);
  }

  @Put(':id')
  async updateBook(@Param('id') id: string, @Body() data: Book): Promise<Book | null> {
    return this.bookService.updateBook(Number(id), data);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string): Promise<Book | null> {
    return this.bookService.deleteBook(Number(id));
  }
}