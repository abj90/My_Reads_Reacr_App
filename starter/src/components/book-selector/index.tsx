import { ChangeEvent, useState } from "react";

import { IBookSelector, ShelfItem } from "../../interfaces";
import { ShelfOption } from "../../util/constants";

const BookSelector = ({ shelf, handleSelectShelf }: IBookSelector) => {
  const [selected, setSelected] = useState<string>(shelf || "");
  let options: ShelfItem[] = [
    ShelfOption.CURRENTLY_READING,
    ShelfOption.WANT_READ,
    ShelfOption.READ,
  ];

  const setBookListSelectOptions = () => {
    options = [ShelfOption.MOVE_TO, ...options, ShelfOption.NONE];
  };

  const setSearchedBooksSelectOptions = () => {
    options = [ShelfOption.ADD_TO, ...options];
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelected(event.target?.value);
    handleSelectShelf(event.target?.value);
  };

  if (shelf) {
    setBookListSelectOptions();
  } else {
    setSearchedBooksSelectOptions();
  }

  return (
    <div className="book-shelf-changer">
      <select value={selected} onChange={(event) => handleChange(event)}>
        {options.map(({ value, text, disabled }: ShelfItem, index) => (
          <option key={index} value={value} disabled={disabled}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BookSelector;
