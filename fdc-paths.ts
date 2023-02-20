import type { AbridgedFoodItem, BrandedFoodItem, FoundationFoodItem, SRLegacyFoodItem, SurveyFoodItem } from "./fdc-api-types";
import type { ExtSearchResult } from "./fdc-ext-paths";

export type FormatType = "abridged" | "full";

export interface FoodGet {
  format?: FormatType;
  nutrients?: number[];
}

export type FoodGetResponse =
  AbridgedFoodItem | BrandedFoodItem | FoundationFoodItem | SRLegacyFoodItem | SurveyFoodItem;

export interface FoodsGet extends FoodGet {
  fdcIds: number[];
}

export type FoodsGetResponse = FoodGetResponse[];

export type DataTypeSource = "Branded" | "Foundation" | "Survey (FDDS)" | "SR Legacy";

export type SortBy = "dataType.keyword" | "lowercaseDescription.keyword" | "fdcId" | "publishedDate";

export type SortOrder = "asc" | "desc";

export interface FoodsListGet {
  dataType?: DataTypeSource[];
  pageSize?: number;
  pageNumber?: number;
  sortBy?: SortBy;
  sortOrder?: SortOrder;
}

export type FoodsListResponse = AbridgedFoodItem[];

export interface FoodsSearchGet extends FoodsListGet {
  query: string;
  brandOwner?: string;
}

export type FoodsSearchResponse = ExtSearchResult[];

export type GetPath = FoodGet | FoodsGet | FoodsListGet | FoodsSearchGet;
