import { Filter as FilterProps } from '@/consts/filters';

export const Filter = ({ baseLabel, options }: FilterProps) => {
    return (
        <select onChange={(e) => console.log('Filter Value: ', e.target.value)}>
            <option value="">{baseLabel}</option>
            {options.map((option, index) => (
                <option value={option.value} key={index}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
