import styles from './Button.module.css';

const Button = (props) => {
    const btnclass = props.buttonClassName;
    return(
        <div>
            <a href={props.buttonURL} className={`${styles[btnclass]}`}>{props.buttonName}</a>
        </div>
    );
};

export default Button;