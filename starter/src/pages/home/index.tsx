import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as BooksAPI from "../../server/BooksAPI";
import { IBook } from "../../interfaces";
import BookShelf from "../../components/book-shelf";

const Home = () => {
  const [allBooks, setAllBooks] = useState<IBook[]>([]);

  useEffect(() => {
    const getAllBooks = async () => {
      const result: IBook[] = await BooksAPI.getAll();
      setAllBooks(result);
    };
    getAllBooks();
  }, []);

  const updateBookShelf = async (
    id: string,
    shelfSelected: string
  ): Promise<void> => {
    const resp = await BooksAPI.update({ id }, shelfSelected);
    console.log("resp", resp);
    setAllBooks(
      allBooks.map((book) => {
        if (book.id === id) {
          return { ...book, shelf: shelfSelected };
        }
        return book;
      })
    );
  };

  console.log("all books", allBooks);
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf allBooks={allBooks} updateBookShelf={updateBookShelf} />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Home;
