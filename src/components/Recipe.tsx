import { Recipe as RecipeI } from '@/types/interfaces';
import Image from 'next/image';
import { Tag } from './Tag';

interface RecipeProps {
    recipe: RecipeI;
}
export const Recipe = ({ recipe }: RecipeProps) => {
    const { calories, cuisineType, images, ingredientLines, totalTime, label } =
        recipe;
    // Deconstructing yield threw an error so instead I created a variable to store its value
    const { THUMBNAIL } = images;
    const feedsNum = recipe.yield;

    return (
        <div>
            <Image
                src={THUMBNAIL.url}
                alt="thumbnail"
                width={THUMBNAIL.width}
                height={THUMBNAIL.height}
            />
            <h3>{label}</h3>
            <div>
                {ingredientLines.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            <div>
                <div>
                    <p>Calories: {calories}</p>
                    <p>Time: {totalTime}</p>
                    <p>Feeds: {feedsNum}</p>
                </div>
                <div>
                    {cuisineType.map((type, index) => (
                        <Tag label={type} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};
