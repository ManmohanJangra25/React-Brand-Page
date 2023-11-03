const Image = (props) => {
    return <img className={props.imageClass} src={props.imgSource} alt={props.imgAlt}/>
}

export default Image;