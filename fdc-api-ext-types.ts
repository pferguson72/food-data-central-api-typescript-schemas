export interface SearchResultFoodBase<T extends FoodNutrientsBase> {
  fdcId: number;
  description: string;
  lowercaseDescription: string;
  dataType: string;
  foodMeasures: any[];
  foodAttributes: any[];
  foodAttributeTypes: any[];
  foodVersionIds: any[];
  foodCategory: string;
  allHighlightFields: string;
  score: number;
  microbes: any[];
  finalFoodInputFoods: any[];
  publishedDate: string;
  foodNutrients: T[];
}

export interface Branded extends SearchResultFoodBase<FoodNutrientsBranded> {
  gtinUpc: string;
  brandOwner: string;
  brandName: string;
  ingredients: string;
  marketCountry: string;
  modifiedDate: string;
  dataSource: string;
  packageWeight: string;
  servingSizeUnit: string;
  servingSize: number;
  tradeChannels: string[];
  householdServingFullText: string;
  subbrandName: string;
  shortDescription: string;
}

export interface Survey_FNDDS extends SearchResultFoodBase<FoodNutrientsSurvey_FNDDS> {
  commonNames: string;
  additionalDescriptions: string;
  foodCode: number;
  foodCategoryId: number;
}

export interface Foundation extends SearchResultFoodBase<FoodNutrientsFoundation> {
  commonNames: string;
  additionalDescriptions: string;
  ndbNumber: number;
  mostRecentAcquisitionDate: string;
}

export interface SR_Legacy extends SearchResultFoodBase<FoodNutrientsSR_Legacy> {
  commonNames: string;
  additionalDescriptions: string;
  ndbNumber: number;
}

export interface FoodNutrientsBase {
  nutrientId: number;
  nutrientName: string;
  nutrientNumber: string;
  unitName: string;
  value: number;
  rank: number;
  indentLevel: number;
  foodNutrientId: number;
}

export interface FoodNutrientsBaseExtended extends FoodNutrientsBase {
  derivationCode: string;
  derivationDescription: string;
  derivationId: number;
  foodNutrientSourceId: number;
  foodNutrientSourceCode: string;
  foodNutrientSourceDescription: string;
}

export interface FoodNutrientsSurvey_FNDDS extends FoodNutrientsBase {}

export interface FoodNutrientsBranded extends FoodNutrientsBaseExtended {
  percentDailyValue: number;
}

export interface FoodNutrientsFoundation extends FoodNutrientsBaseExtended {
  dataPoints: number;
  min: number;
  max: number;
  median: number;
}

export interface FoodNutrientsSR_Legacy extends FoodNutrientsBaseExtended {
  dataPoints: number;
}
