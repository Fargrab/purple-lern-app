import { ISearch } from "./search.intefaces";
import { atom } from "jotai";

const INITIAL_STATE = {
  searchQuery: null,
};

export const searchAtom = atom<ISearch>(INITIAL_STATE);

export const changeSearchAtom = atom(
  (get) => get(searchAtom),
  async (_get, set, query: string) => {
    set(searchAtom, {
      searchQuery: query,
    });
  },
);
