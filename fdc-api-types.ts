export interface LabelNutrient {
  value: number;
}

export interface AbridgedFoodItem {
  dataType: string;
  description: string;
  fdcId: number;
  foodNutrients?: AbridgedFoodNutrient[];
  publicationDate?: string;
  brandOwner?: string;
  gtinUpc?: string;
  ndbNumber?: string;
  foodCode?: string;
}

export interface LabelNutrients {
  fat: LabelNutrient;
  saturatedFat: LabelNutrient;
  transFat: LabelNutrient;
  cholesterol: LabelNutrient;
  sodium: LabelNutrient;
  carbohydrates: LabelNutrient;
  fiber: LabelNutrient;
  sugars: LabelNutrient;
  protein: LabelNutrient;
  calcium: LabelNutrient;
  iron: LabelNutrient;
  postassium: LabelNutrient;
  calories: LabelNutrient;
}

export interface BrandedFoodItem {
  fdcId: number;
  availableDate?: string;
  brandOwner?: string;
  dataSource?: string;
  dataType: string;
  description: string;
  foodClass?: string;
  gtinUpc?: string;
  householdServingFullText?: string;
  ingredients?: string;
  modifiedDate?: string;
  publicationDate?: string;
  servingSize?: number;
  servingSizeUnit?: string;
  brandedFoodCategory?: string;
  foodNutrients?: FoodNutrient[];
  foodUpdateLog?: FoodUpdateLog[];
  labelNutrients?: LabelNutrients;
}

export interface FoundationFoodItem {
  fdcId: number;
  dataType: string;
  description: string;
  foodClass?: string;
  footNote?: string;
  isHistoricalReference?: boolean;
  ndbNumber?: string;
  publicationDate?: string;
  scientificName?: string;
  foodCategory?: FoodCategory;
  foodComponents?: FoodComponent[];
  foodNutrients?: FoodNutrient[];
  foodPortions?: FoodPortion[];
  inputFoods?: InputFoodFoundation[];
  nutrientConversionFactors?: NutrientConversionFactors[];
}

export interface SRLegacyFoodItem {
  fdcId: number;
  dataType: string;
  description: string;
  foodClass?: string;
  isHistoricalReference?: boolean;
  ndbNumber?: string;
  publicationDate?: string;
  scientificName?: string;
  foodCategory?: FoodCategory;
  foodNutrients?: FoodNutrient[];
  nutrientConversionFactors?: NutrientConversionFactors[];
}

export interface SurveyFoodItem {
  fdcId: number;
  datatype?: string;
  description: string;
  endDate?: string;
  foodClass?: string;
  foodCode?: string;
  publicationDate?: string;
  startDate?: string;
  foodAttributes?: FoodAttribute[];
  foodPortions?: FoodPortion[];
  inputFoods?: InputFoodSurvey[];
  wweiaFoodCategory?: WweiaFoodCategory;
}

export interface SampleFoodItem {
  fdcId: number;
  datatype?: string;
  description: string;
  foodClass?: string;
  publicationDate?: string;
  foodAttributes?: FoodCategory[];
}

export interface AbridgedFoodNutrient {
  number?: number;
  name?: string;
  amount?: number;
  unitName?: string;
  derivationCode?: string;
  derivationDescription?: string;
}

export interface FoodNutrient {
  id: number;
  amount?: number;
  dataPoints?: number;
  min?: number;
  max?: number;
  median?: number;
  type?: string;
  nutrient?: Nutrient;
  foodNutrientDerivation?: FoodNutrientDerivation;
  nutrientAnalysisDetails?: NutrientAnalysisDetails;
}

export interface Nutrient {
  id: number;
  number: string;
  name: string;
  rank: number;
  unitName: string;
}

export interface FoodNutrientDerivation {
  id: number;
  code: string;
  description: string;
  foodNutrientSource: FoodNutrientSource;
}

export interface FoodNutrientSource {
  id: number;
  code: string;
  description: string;
}

export interface NutrientAnalysisDetails {
  subSampleId: number;
  amount: number;
  nutrientId: number;
  labMethodDescription: string;
  labMethodOriginalDescription: string;
  labMethodLink: string;
  labMethodTechnique: string;
  nutrientAcquisitionDetails: NutrientAcquisitionDetails[];
}

export interface NutrientAcquisitionDetails {
  sampleUnitId: number;
  purchaseDate: string;
  storeCity: string;
  storeState: string;
}

export interface NutrientConversionFactors {
  type: string;
  value: number;
}

export interface FoodUpdateLog {
  fdcId: number;
  availableDate: string;
  brandOwner: string;
  dataSource: string;
  dataType: string;
  description: string;
  foodClass: string;
  gtinUpc: string;
  householdServingFullText: string;
  ingredients: string;
  modifiedDate: string;
  publicationDate: string;
  servingSize: number;
  servingSizeUnit: string;
  brandedFoodCategory: string;
  changes: string;
  foodAttributes: FoodAttribute[];
}

export interface FoodAttributeType {
  id: number;
  name: string;
  description: string;
}

export interface FoodAttribute {
  id: number;
  sequenceNumber: number;
  value: string;
  FoodAttributeType: FoodAttributeType;
}

export interface FoodCategory {
  id: number;
  code: string;
  description: string;
}

export interface FoodComponent {
  id: number;
  name: string;
  dataPoints: number;
  gramWeight: number;
  isRefuse: boolean;
  minYearAcquired: number;
  percentWeight: number;
}

export interface FoodPortion {
  id: number;
  amount: number;
  dataPoints: number;
  gramWeight: number;
  minYearAcquired: number;
  modifier: string;
  portionDescription: string;
  sequenceNumber: number;
  measureUnit: MeasureUnit;
}

export interface InputFoodFoundation {
  id: number;
  foodDescription: string;
  inputFood: SampleFoodItem;
}

export interface InputFoodSurvey {
  id: number;
  amount: number;
  foodDescription: string;
  ingredientCode: number;
  ingredientDescription: string;
  ingredientWeight: number;
  portionCode: string;
  portionDescription: string;
  sequenceNumber: number;
  surveyFlag: number;
  unit: string;
  inputFood: SurveyFoodItem;
  retentionFactor: RetentionFactor;
}

export interface MeasureUnit {
  id: number;
  abbreviation: string;
  name: string;
}

export interface RetentionFactor {
  id: number;
  code: number;
  description: string;
}

export interface WweiaFoodCategory {
  wweiaFoodCategoryCode: number;
  wweiaFoodCategoryDescription: string;
}

export interface FoodsCriteria {
  fdcIds: number[];
  format: string;
  nutrients: number[];
}

export interface FoodListCriteria {
  dataType: string[];
  pageSize: number;
  pageNumber: number;
  sortBy: string;
  sortOrder: string;
}

export interface FoodSearchCriteria {
  query: string;
  dataType: string[];
  pageSize: number;
  pageNumber: number;
  sortBy: string;
  sortOrder: string;
  brandOwner: string;
}

export interface SearchResultGeneric<T> {
  foodSearchCriteria: FoodSearchCriteria;
  totalHits: number;
  currentPage: number;
  totalPages: number;
  foods: T[];
}

export interface SearchResult extends SearchResultGeneric<SearchResultFood> {}

export interface SearchResultFood {
  fdcId: number;
  dataType?: string;
  description: string;
  foodCode?: string;
  foodNutrients?: AbridgedFoodNutrient[];
  publicationDate?: string;
  scientificName?: string;
  brandOwner?: string;
  gtinUpc?: string;
  ingredients?: string;
  ndbNumber?: string;
  additionalDescriptions?: string;
  allHighlightFields?: string;
  score?: number;
}
