export interface Category {
  _id: string;
  category: string;
  game: Array<string>;
}

export type Categories = Array<Category>;
