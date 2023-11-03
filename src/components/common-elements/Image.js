import styles from "./Image.module.css";

const Image = (props) => {
    return <img className={`${styles[props.imageClass]}`} src={props.imgSource} alt={props.imgAlt}/>
}

export default Image;