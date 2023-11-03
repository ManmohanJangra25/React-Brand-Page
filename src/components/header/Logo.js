import style from './Logo.module.css';
import Image from '../common-elements/Image';
import brand_logo from '../../images/brand_logo.png';

const Logo = () => {
    return(
        <div className={style.logo}>
            <Image imgSource={brand_logo} imgAlt="Brand Logo"/>
        </div>
    );
};

export default Logo;