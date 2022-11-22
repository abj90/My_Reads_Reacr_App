export interface IBook {
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: PanelizationSummary;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  id: string;
  shelf: string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface IndustryIdentifier {
  type: string;
  identifier: string;
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

export interface ReadingModes {
  text: boolean;
  image: boolean;
}

export interface IBookComponent {
  book: IBook;
  onUpdateBookShelf: (id: string, shelfSelected: string) => void;
}

export interface IBookShelf {
  allBooks: IBook[];
  updateBookShelf: (id: string, shelfSelected: string) => void;
}

export interface ShelfItem {
  value: string;
  text: string;
  disabled: boolean;
}

export interface IBookSelector {
  shelf: string;
  handleSelectShelf: (shelfSelected: string) => void;
}
