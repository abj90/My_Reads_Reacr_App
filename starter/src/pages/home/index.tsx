import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as BooksAPI from "../../server/BooksAPI";
import { IBook } from "../../interfaces";
import { BookShelf, ErrorContainer, Spinner } from "../../components";

const Home = () => {
  const [fetching, setFetching] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [allBooks, setAllBooks] = useState<IBook[]>([]);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    setError(false);
    setFetching(true);
    try {
      const resp = await BooksAPI.getAll();
      setFetching(false);
      if (resp?.error) {
        throw new Error(resp?.error);
      }
      setError(false);
      setAllBooks(resp);
    } catch (error) {
      setError(true);
      setAllBooks([]);
    }
  };

  const updateBookShelf = async (
    id: string,
    shelfSelected: string
  ): Promise<void> => {
    await BooksAPI.update({ id }, shelfSelected);
    setAllBooks(
      allBooks.map((book: IBook) => {
        if (book.id === id) {
          return { ...book, shelf: shelfSelected };
        }
        return book;
      })
    );
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {error && <ErrorContainer />}
        {fetching ? (
          <Spinner />
        ) : (
          <BookShelf allBooks={allBooks} updateBookShelf={updateBookShelf} />
        )}
      </div>
      <div className="open-search">
        <Link to="/search" state={allBooks}>
          Add a book
        </Link>
      </div>
    </div>
  );
};

export default Home;
