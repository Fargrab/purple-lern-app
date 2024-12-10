import { IFilter } from "./filters.interfaces";
import { atom } from "jotai";

const INITIAL_STATE: IFilter = {
  filter: null,
};

export const filterAtom = atom<IFilter>(INITIAL_STATE);

export const changeFilterAtom = atom(
  (get) => get(filterAtom),
  (_get, set, filter: string | null) => {
    set(filterAtom, {
      filter: filter !== "" ? filter : null,
    });
  },
);
