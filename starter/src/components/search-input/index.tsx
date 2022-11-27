import { useState } from "react";

export interface ISearchBar {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: ISearchBar) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value);
    onSearch(event.currentTarget.value);
  };

  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title, author, or ISBN"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
