import Book from "../book";

import { IBook, IBookShelf, ShelfItem } from "../../interfaces";
import { ShelfOption } from "../../util/constants";

const BookShelf = ({ allBooks, updateBookShelf }: IBookShelf) => {
  const shelfs: ShelfItem[] = [
    ShelfOption.CURRENTLY_READING,
    ShelfOption.WANT_READ,
    ShelfOption.READ,
  ];

  const handleUpdateBookShelf = (id: string, shelfSelected: string): void => {
    updateBookShelf(id, shelfSelected);
  };

  return (
    <div className="list-books-content">
      <div>
        {shelfs.map(({ text, value }: ShelfItem, index) => {
          return (
            <div key={index} className="bookshelf">
              <h2 className="bookshelf-title">{text}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {allBooks
                    .filter(({ shelf }: IBook) => shelf === value)
                    .map((book: IBook) => (
                      <li key={book.id}>
                        <Book
                          book={book}
                          onUpdateBookShelf={handleUpdateBookShelf}
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookShelf;
