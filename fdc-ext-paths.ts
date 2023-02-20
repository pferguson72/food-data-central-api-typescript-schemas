import type { SearchResultGeneric } from "./fdc-api-types";
import type { Branded, Survey_FNDDS, Foundation, SR_Legacy } from "./fdc-api-ext-types";

export interface ExtSearchResult extends SearchResultGeneric<ExtSearchResultFood> {
  pageList: number[];
  aggregations: any;
}

export type ExtSearchResultFood = Branded | Survey_FNDDS | Foundation | SR_Legacy;

