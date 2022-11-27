import { useEffect, useState } from "react";

import * as BooksAPI from "../../server/BooksAPI";
import {
  BookList,
  CloseSearchBtn,
  ErrorContainer,
  SearchBar,
  Spinner,
} from "../../components";
import { IBook } from "../../interfaces";
import { useLocation } from "react-router-dom";

const SearchResult = () => {
  const [fetching, setFetching] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [queryValue, setQuery] = useState<string>("");
  const [searchedBookList, setSearchedBookList] = useState<IBook[]>([]);
  const [booksInShelf, setBooksInShelf] = useState<IBook[]>(
    useLocation().state || []
  );

  const handleSearch = (query: string): void => {
    setQuery(query);
  };

  const searchBooks = async (query: string): Promise<void> => {
    setError(false);
    setFetching(true);
    try {
      const resp = await BooksAPI.search(query);
      setFetching(false);
      if (resp?.error) {
        throw new Error(resp?.error);
      }
      setError(false);
      setSearchedBookList(addShelfToBook(resp, booksInShelf));
    } catch (error) {
      setSearchedBookList([]);
      setError(true);
    }
  };

  const addShelfToBook = (
    searchedBookList: IBook[],
    bookList: IBook[]
  ): IBook[] => {
    if (bookList.length === 0) {
      return searchedBookList;
    }

    return searchedBookList.map((book: IBook) => {
      for (let index = 0; index < bookList.length; index++) {
        if (book.id === bookList[index].id) {
          return { ...book, shelf: bookList[index].shelf };
        }
      }
      return book;
    });
  };

  useEffect(() => {
    if (!queryValue) {
      setSearchedBookList([]);
    } else {
      searchBooks(queryValue);
    }
  }, [queryValue]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <CloseSearchBtn />
        <SearchBar onSearch={handleSearch} />
      </div>
      {error && <ErrorContainer />}
      {fetching ? <Spinner /> : <BookList bookList={searchedBookList} />}
    </div>
  );
};

export default SearchResult;
