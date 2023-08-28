# Hapi TypeScript CRUD Server

A TypeScript-based REST API using the Hapi framework, providing CRUD operations on a dataset of books.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Installation and Setup](#installation-and-setup)
3. [File Structure and Descriptions](#file-structure-and-descriptions)
4. [Running the Server](#running-the-server)
5. [Endpoints](#endpoints)

## Project Overview

This project aims to demonstrate the creation of a simple Hapi server using TypeScript. The main feature of the server is to allow CRUD operations on a collection of books.

## Installation and Setup

1. **Clone the Repository**:

   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the Directory**:

   ```bash
   cd hapi-ts-crud
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

## File Structure and Descriptions

- **src/models/book.ts**: This file contains the `Book` data model and an initial array of book objects.
- **src/routes/bookRoutes.ts**: Defines the various routes and their handlers for CRUD operations on the book dataset.

- **src/server.ts**: Contains the main server configuration, route registrations, and initializes the Hapi server.

## Running the Server

To start the server, run:

```bash
npm start
```

The server should be up and running on `http://localhost:3000`.

## Endpoints

1. **Get All Books**:

   - Method: `GET`
   - Endpoint: `/books`

2. **Get a Specific Book by ID**:

   - Method: `GET`
   - Endpoint: `/books/{id}`

3. **Add a New Book**:

   - Method: `POST`
   - Endpoint: `/books`
   - Body:
     ```json
     {
       "id": <number>,
       "title": "<title>",
       "author": "<author_name>",
       "genre": "<genre>",
       "publishedYear": <year>
     }
     ```

4. **Update a Book by ID**:

   - Method: `PUT`
   - Endpoint: `/books/{id}`
   - Body:
     ```json
     {
       "id": <number>,
       "title": "<updated_title>",
       "author": "<updated_author_name>",
       "genre": "<updated_genre>",
       "publishedYear": <updated_year>
     }
     ```

5. **Delete a Book by ID**:
   - Method: `DELETE`
   - Endpoint: `/books/{id}`
