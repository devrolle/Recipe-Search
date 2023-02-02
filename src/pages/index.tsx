import { useEffect, useState } from 'react';
import filters from '@/consts/filters';
import { Filter } from '@/components/Filter';
import { Recipe as RecipeI, SelectedFilters } from '@/types/interfaces';
import { GenerateURL } from '@/helpers/generateURL';
import { Recipe } from '@/components/Recipe';

export default function Home() {
    const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
        diet: [],
        health: [],
        cuisineType: [],
        mealType: [],
    });
    const [recipes, setRecipes] = useState<RecipeI[]>([]);
    const [emptyResponse, setEmptyResponse] = useState<boolean>(false);
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
                const dataRecipes: RecipeI[] = [];
                data.hits.map((hit: any) => {
                    dataRecipes.push(hit.recipe);
                });

                if (data.hits.length < 1) {
                    setEmptyResponse(true);
                } else {
                    setEmptyResponse(false);
                }

                setRecipes(dataRecipes);
            });
    }

    return (
        <section className="max-w-6xl mx-auto mt-20">
            <header>
                <h1 className="text-blue-200 font-bold text-4xl">
                    Recipe Search
                </h1>
                <p className="font-light text-lg my-2">
                    Use the following filters to describe the recipe that best
                    fits you then search!
                </p>
            </header>
            <div className="grid grid-cols-4 gap-2">
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
            <div className="w-full flex justify-center my-6">
                <button
                    onClick={Search}
                    className="border-4 border-red-300 text-red-300 font-semibold text-lg py-2 px-5 rounded-lg mt-4 hover:bg-red-300 hover:text-white duration-200 w-1/4"
                >
                    Search
                </button>
            </div>
            {!emptyResponse ? (
                <div className="grid grid-cols-3 gap-2 mt-10">
                    {recipes?.map((recipe, index) => (
                        <Recipe recipe={recipe} key={index} />
                    ))}
                </div>
            ) : (
                <p>No Recipes Found...</p>
            )}
        </section>
    );
}
