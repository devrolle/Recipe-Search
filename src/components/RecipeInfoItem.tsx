interface RecipeInfoItemProps {
    label: string;
}

export const RecipeInfoItem = ({ label }: RecipeInfoItemProps) => {
    return <p className="text-sm font-medium text-gray-400 italic">{label}</p>;
};
