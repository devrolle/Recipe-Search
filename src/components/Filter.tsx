import { SelectedFilters, Filter as FilterI } from '@/types/interfaces';
import { Dispatch, SetStateAction } from 'react';

interface FilterProps extends FilterI {
    updateFilter: (
        value: string,
        identifier: 'diet' | 'health' | 'cuisineType' | 'mealType'
    ) => void;
}

export const Filter = ({
    baseLabel,
    options,
    identifier,
    updateFilter,
}: FilterProps) => {
    return (
        <select
            className="border-2 border-blue-300 rounded-md text-blue-400 font-normal px-3 py-2 appearance-none outline-none cursor-pointer"
            onChange={(e) => updateFilter(e.target.value, identifier)}
        >
            <option value="">{baseLabel}</option>
            {options.map((option, index) => (
                <option value={option.value} key={index}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
