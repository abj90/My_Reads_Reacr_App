import { ShelfItem } from "../interfaces";

export class ShelfOption {
  public static MOVE_TO: ShelfItem = {
    value: "",
    text: "Move to...",
    disabled: true,
  };

  public static CURRENTLY_READING: ShelfItem = {
    value: "currentlyReading",
    text: "Currently Reading",
    disabled: false,
  };

  public static WANT_READ: ShelfItem = {
    value: "wantToRead",
    text: "Want to Read",
    disabled: false,
  };

  public static READ: ShelfItem = {
    value: "read",
    text: "Read",
    disabled: false,
  };

  public static NONE: ShelfItem = {
    value: "none",
    text: "None",
    disabled: false,
  };
}
