import * as C from './styles';

const Button = ({Text, onclick, Type = "button"}) => {
    return (
        <C.Button type={Type} onclick={onclick}>
            {Text}
        </C.Button>

    )
}

export default Button;

// colocar os toast 