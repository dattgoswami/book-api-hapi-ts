import { ServerRoute } from "@hapi/hapi";
import { books, Book } from "../models/book";

export const bookRoutes: ServerRoute[] = [
  {
    method: "GET",
    path: "/books",
    handler: (request, h) => {
      return books;
    },
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: (request, h) => {
      const book = books.find((b) => b.id === +request.params.id);
      if (!book) return h.response("Book not found").code(404);
      return book;
    },
  },
  {
    method: "POST",
    path: "/books",
    handler: (request, h) => {
      const book: Book = request.payload as Book;
      books.push(book);
      return h.response(book).code(201);
    },
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: (request, h) => {
      const index = books.findIndex((b) => b.id === +request.params.id);
      if (index === -1) return h.response("Book not found").code(404);

      const updatedBook: Book = request.payload as Book;
      books[index] = updatedBook;
      return updatedBook;
    },
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: (request, h) => {
      const index = books.findIndex((b) => b.id === +request.params.id);
      if (index === -1) return h.response("Book not found").code(404);

      books.splice(index, 1);
      return h.response("Book deleted").code(200);
    },
  },
];
