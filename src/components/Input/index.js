import * as C from './styles';

const Input = ({ type, placeholder, value, onChange }) => {
    return (

        <C.Input
            value={value}
            autocomplete="current-password"
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        />
    )
}

export default Input;