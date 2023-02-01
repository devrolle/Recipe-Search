import { SelectedFilters } from '@/types/interfaces';

export function GenerateURL(filters: SelectedFilters) {
    let url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/recipes/v2?type=public&app_id=${process.env.NEXT_PUBLIC_APPLICATION_ID}&app_key=${process.env.NEXT_PUBLIC_APPLICATION_KEY}`;

    const keys = Object.keys(filters);
    const values = Object.values(filters);

    keys.map((key, index) => {
        if (values[index].length > 0) {
            url = `${url}&${key}=${values[index][0]}`;
        }
    });

    return url;
}
