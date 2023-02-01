export interface SelectedFilters {
    diet: string[];
    health: string[];
    cuisineType: string[];
    mealType: string[];
}

export interface Filter {
    baseLabel: string;
    options: FilterOption[];
    identifier: 'diet' | 'health' | 'cuisineType' | 'mealType';
}

export interface FilterOption {
    label: string;
    value: string;
}

export interface Recipe {
    calories: number;
    cautions: string[];
    cuisineType: string[];
    dietLabels: string[];
    digest: any;
    dishType: string[];
    healthlabels: string[];
    image: string;
    images: {
        THUMBNAIL: RecipeImage;
        SMALL: RecipeImage;
        REGULAR: RecipeImage;
    };
    ingredientLines: string[];
    ingredients: any[];
    label: string;
    mealType: string[];
    shareAs: string;
    source: string;
    totalDaily: any;
    totalNutrients: any;
    totalTime: number;
    totalWeight: number;
    uri: string;
    url: string;
    yield: number;
}

export interface RecipeImage {
    url: string;
    width: number;
    height: number;
}
