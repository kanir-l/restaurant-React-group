
interface IButtonProps {
    type: string;
}

function Button(props: IButtonProps) {
    return (
        <button>{props}</button>
    );
}

export default Button;