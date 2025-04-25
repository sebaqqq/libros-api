export interface FilterOptions {
  publisher: string;
  mediaType: string;
  country: string;
  pagesMin: string;
  pagesMax: string;
  year: string;
  sortOrder: "asc" | "desc";
}
