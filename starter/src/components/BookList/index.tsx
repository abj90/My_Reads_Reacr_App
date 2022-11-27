import { IBook, IBookList } from "../../interfaces";

import * as BooksAPI from "../../server/BooksAPI";

import Book from "../book";

const BookList = ({ bookList }: IBookList) => {
  const updateBook = async (
    id: string,
    shelfSelected: string
  ): Promise<void> => {
    await BooksAPI.update({ id }, shelfSelected);
  };

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {bookList?.map((book: IBook) => (
          <li key={book?.id}>
            <Book book={book} onUpdateBookShelf={updateBook} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BookList;
