import { IFilter } from "../../filters/model/filters.interfaces";
import { ISearch } from "../../search/model/search.intefaces";

export interface IProduct {
  id: number;
  name: string;
  subTitle: string;
  type: string;
  price: number;
  image: string;
  description: string;
  rating: number;
}

export interface ICatalogState {
  products: IProduct[];
  isLoading: boolean;
  error: string | null;
}

export interface ICatalogQueryParams extends IFilter, ISearch {}
