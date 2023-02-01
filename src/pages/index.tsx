import { useState } from 'react';
import filters from '@/consts/filters';
import { Filter } from '@/components/Filter';
import { Recipe, SelectedFilters } from '@/types/interfaces';
import { GenerateURL } from '@/helpers/generateURL';

export default function Home() {
    const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
        diet: [],
        health: [],
        cuisineType: [],
        mealType: [],
    });
    const [recipes, setRecipes] = useState<Recipe[]>();

    const updateFilter = (
        value: string,
        identifier: 'diet' | 'health' | 'cuisineType' | 'mealType'
    ) => {
        const selectedFiltersCopy: SelectedFilters = selectedFilters;
        selectedFiltersCopy[`${identifier}`] = [value];

        setSelectedFilters({ ...selectedFilters, ...selectedFiltersCopy });
    };

    function Search() {
        const url = GenerateURL(selectedFilters);
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                const dataRecipes: Recipe[] = [];
                data.hits.map((hit: any) => {
                    dataRecipes.push(hit.recipe);
                });

                setRecipes(dataRecipes);
            });
    }

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
                        identifier={filter.identifier}
                        updateFilter={updateFilter}
                        key={index}
                    />
                ))}
            </div>
            <button onClick={Search}>Search</button>
        </section>
    );
}
