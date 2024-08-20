export type InputProps = {
    type: string;
    id: string;
    name: string;
    label: string;
    placeholder: string | undefined;
    required: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};