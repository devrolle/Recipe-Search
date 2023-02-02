interface TagProps {
    label: string;
}

export const Tag = ({ label }: TagProps) => {
    return <div>{label}</div>;
};
