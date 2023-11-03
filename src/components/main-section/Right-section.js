import styles from './Right-section.module.css';
import Image from '../common-elements/Image';
import shoe_image from '../../images/show_img.png';

const RightSection = (props) => {
    return(
        <div className={styles.rightSec}>
            <Image imageClass='right_show_image' imgSource={shoe_image} imgAlt="Shoe Image"/>
        </div>
    );
};

export default RightSection;