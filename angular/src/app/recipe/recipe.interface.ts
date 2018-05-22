export interface INutrientsValue {
  label: string;
  quantity: number;
  unit: string;
  percantge?: number;
}

export interface INutrientDataList {
  [index: string]: INutrientsValue;
}

export interface INutrient {
  uri: string;
  yield: number;
  calories: number;
  totalWeight: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  totalNutrients: INutrientDataList;
  totalDaily: INutrientDataList;
  ingredients: any[];
}

export interface IIngredient {
  name: string;
  nutrients: INutrient[];
}

export interface IRecipe {
  name: string;
  ingredients: IIngredient[];
}
