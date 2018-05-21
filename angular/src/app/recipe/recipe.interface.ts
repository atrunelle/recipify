interface INutrientsValue {
  label: string;
  quantity: number;
  unit: string;
  percantge?: number;
}

export interface INutrient {
  uri: string;
  yield: number;
  calories: number;
  totalWeight: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: any[];
  totalNutrients: {
    [index: string]: INutrientsValue;
  };
  totalDaily: {
    [index: string]: INutrientsValue;
  };
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
