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
