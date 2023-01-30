import { useEffect, useState } from 'react';
import filters from '@/consts/filters';
import { Filter } from '@/components/Filter';

interface SelectedFilters {
    diet: string[];
    health: string[];
    cuisineType: string[];
    mealType: string[];
}

export default function Home() {
    const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
        diet: [],
        health: [],
        cuisineType: [],
        mealType: [],
    });

    useEffect(() => {
        // Fetch Recipes
        // fetch(
        //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/recipes/v2?type=public&app_id=${process.env.NEXT_PUBLIC_APPLICATION_ID}&app_key=${process.env.NEXT_PUBLIC_APPLICATION_KEY}&diet=${selectedFilters.diet}&health=${selectedFilters.health}&cuisineType=${selectedFilters.cuisineType}&mealType=${selectedFilters.mealType}`,
        //     {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     }
        // )
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((data) => {
        //         console.log(data);
        //     });
        fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/recipes/v2?type=public&app_id=${process.env.NEXT_PUBLIC_APPLICATION_ID}&app_key=${process.env.NEXT_PUBLIC_APPLICATION_KEY}&diet=high-fiber&health=alcohol-free&cuisineType=Middle Eastern&mealType=Lunch`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            });
    }, []);
    return (
        <section>
            <header>
                <h1>Recipe Search</h1>
                <p>
                    Use the following filters to describe the recipe that best
                    fits you then search!
                </p>
            </header>
            <div id="filter-grid">
                {filters.map((filter, index) => (
                    <Filter
                        baseLabel={filter.baseLabel}
                        options={filter.options}
                        key={index}
                    />
                ))}
            </div>
        </section>
    );
}
