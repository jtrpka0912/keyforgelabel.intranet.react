import './input.css';
import { InputProps } from './input.types';

const Input = ({
    type = 'text',
    id,
    name,
    label,
    placeholder,
    required,
    value,
    onChange
}: InputProps) => {
    return (
        <div className="input">
            <label htmlFor={id}>{label} {required ? <span title="Required Field">*</span> : null}</label>
            <input 
                type={type} 
                name={name} 
                id={id} 
                placeholder={placeholder} 
                aria-placeholder={placeholder}
                required={required ? true : undefined}
                aria-required={required ? true : undefined}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;