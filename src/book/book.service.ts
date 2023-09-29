import { PrismaClient, Book } from '@prisma/client';

const prisma = new PrismaClient();

export class BookService {
  async getAllBooks(): Promise<Book[]> {
    return prisma.book.findMany();
  }

  async getBookById(id: number): Promise<Book | null> {
    return prisma.book.findUnique({ where: { id } });
  }

  async createBook(data: Book): Promise<Book> {
    return prisma.book.create({ data });
  }

  async updateBook(id: number, data: Book): Promise<Book | null> {
    return prisma.book.update({ where: { id }, data });
  }

  async deleteBook(id: number): Promise<Book | null> {
    return prisma.book.delete({ where: { id } });
  }
}