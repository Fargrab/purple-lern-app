import { atom } from "jotai";
import {
  ICatalogQueryParams,
  ICatalogState,
  IProduct,
} from "./product.interfaces";
import api from "../../../../api";
import { CATALOG_API } from "../../api/api";

const INITIAL_STATE: ICatalogState = {
  products: [],
  isLoading: false,
  error: null,
};

export const catalogAtom = atom<ICatalogState>(INITIAL_STATE);

export const getCatalogAtom = atom(
  (get) => get(catalogAtom),
  async (_get, set, params: ICatalogQueryParams) => {
    set(catalogAtom, {
      products: [],
      isLoading: true,
      error: null,
    });
    try {
      const { data } = await api.get<IProduct[]>(
        `${CATALOG_API.catalog}?type=${params.filter ?? ""}&text=${params.searchQuery ?? ""}`,
      );

      set(catalogAtom, {
        products: data,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set(catalogAtom, {
        products: [],
        isLoading: false,
        error: error.response?.data.message,
      });
    }
  },
);
