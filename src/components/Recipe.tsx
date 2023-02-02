import { Recipe as RecipeI } from '@/types/interfaces';
import Image from 'next/image';
import { RecipeInfoItem } from './RecipeInfoItem';
import { Tag } from './Tag';

interface RecipeProps {
    recipe: RecipeI;
}
export const Recipe = ({ recipe }: RecipeProps) => {
    const { calories, cuisineType, ingredientLines, totalTime, label } = recipe;
    // Deconstructing yield threw an error so instead I created a variable to store its value
    const feedsNum = recipe.yield;

    return (
        <div className="border-2 border-gray-300 rounded-md overflow-hidden p-4 flex flex-col h-96">
            <h3 className="font-bold text-2xl h-14">{label}</h3>
            <div className=" max-h-28 my-4">
                {ingredientLines.map((line, index) => {
                    if (index < 3) {
                        return <p key={index}>{line}</p>;
                    }
                })}
            </div>
            {ingredientLines.length > 3 && (
                <button className="mt-2 text-sm font-semibold text-blue-300 hover:text-blue-400 duration-150 self-start">
                    View more...
                </button>
            )}
            <div className="h-fit mt-auto flex flex-col">
                <div className="grid grid-cols-3 gap-1">
                    <RecipeInfoItem
                        label={`Calories: ${parseInt(calories.toString())}`}
                    />
                    <RecipeInfoItem label={`Time: ${totalTime}`} />
                    <RecipeInfoItem label={`Feeds: ${feedsNum}`} />
                </div>
                <div className="mt-3">
                    {cuisineType.map((type, index) => (
                        <Tag label={type} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};
