import { dataState } from "./dataState";

export interface notesState {
    data: dataState[],
    filteredData?: any
}