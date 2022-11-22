import { ChangeEvent, useState } from "react";

import { IBookSelector, ShelfItem } from "../../interfaces";
import { ShelfOption } from "../../util/constants";

const BookSelector = ({ shelf, handleSelectShelf }: IBookSelector) => {
  const options: ShelfItem[] = [
    ShelfOption.MOVE_TO,
    ShelfOption.CURRENTLY_READING,
    ShelfOption.WANT_READ,
    ShelfOption.READ,
    ShelfOption.NONE,
  ];
  const [selected, setSelected] = useState(shelf);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelected(event.target?.value);
    handleSelectShelf(event.target?.value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={selected} onChange={(event) => handleChange(event)}>
        {options.map(({ value, text, disabled }: ShelfItem) => (
          <option key={value} value={value} disabled={disabled}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BookSelector;
