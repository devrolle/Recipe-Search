export interface Filter {
    baseLabel: string;
    options: FilterOption[];
}

export interface FilterOption {
    label: string;
    value: string;
}

const filters: Filter[] = [
    {
        baseLabel: 'Diet',
        options: [
            {
                label: 'Balanced',
                value: 'balanced',
            },
            {
                label: 'High Fiber',
                value: 'high-fiber',
            },
            {
                label: 'High Protein',
                value: 'high-protein',
            },
            {
                label: 'Low Carb',
                value: 'low-carb',
            },
            {
                label: 'Low Fat',
                value: 'low-fat',
            },
            {
                label: 'Low Sodium',
                value: 'low-sodium',
            },
        ],
    },

    {
        baseLabel: 'Health',
        options: [
            {
                label: 'Alcohol Cocktail',
                value: 'alcohol-cocktail',
            },
            {
                label: 'Alcohol Free',
                value: 'alcohol-free',
            },
            {
                label: 'Celery Free',
                value: 'celery-free',
            },
            {
                label: 'Egg Free',
                value: 'egg-free',
            },
            {
                label: 'Fish Free',
                value: 'fish-free',
            },
            {
                label: 'Pork Free',
                value: 'pork-free',
            },
        ],
    },

    {
        baseLabel: 'Cuisine Type',
        options: [
            {
                label: 'American',
                value: 'American',
            },
            {
                label: 'Asian',
                value: 'Asian',
            },
            {
                label: 'Indian',
                value: 'Indian',
            },
            {
                label: 'Mexican',
                value: 'Mexican',
            },
            {
                label: 'South American',
                value: 'South American',
            },
            {
                label: 'Middle Eastern',
                value: 'Middle Eastern',
            },
        ],
    },

    {
        baseLabel: 'Meal Type',
        options: [
            {
                label: 'Breakfast',
                value: 'Breakfast',
            },
            {
                label: 'Lunch',
                value: 'Lunch',
            },
            {
                label: 'Dinner',
                value: 'Dinner',
            },
            {
                label: 'Snack',
                value: 'Snack',
            },
            {
                label: 'Teatime',
                value: 'Teatime',
            },
        ],
    },
];

export default filters;
