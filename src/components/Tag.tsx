interface TagProps {
    label: string;
}

export const Tag = ({ label }: TagProps) => {
    return (
        <div className="bg-pink-200 rounded-full px-5 py-2 w-fit text-sm font-medium text-white mr-4">
            {label}
        </div>
    );
};
