import { BookSelector } from "..";

import { IBookComponent } from "../../interfaces";

const Book = ({ book, onUpdateBookShelf }: IBookComponent) => {
  const { id, title, authors, imageLinks, shelf } = book;

  const handleSelectShelf = (shelfSelected: string): void => {
    onUpdateBookShelf(id, shelfSelected);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imageLinks.smallThumbnail})`,
          }}
        ></div>
        <BookSelector shelf={shelf} handleSelectShelf={handleSelectShelf} />
      </div>
      <div className="book-title">{title}</div>
      {authors.map((author: string, index: number) => (
        <div key={index} className="book-authors">
          {author}
        </div>
      ))}
    </div>
  );
};

export default Book;
