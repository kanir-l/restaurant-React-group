
interface IButtonProps {
    content: string;
}

function Button(props: IButtonProps) {
    return (
        <button>{props.content}</button>
    );
}

export default Button;