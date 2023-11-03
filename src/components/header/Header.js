import styles from './Header.module.css';
import Logo from './Logo.js';
import Navbar from './Navbar.js';
import Button from '../common-elements/buttons/Button';

const Header = () => {
    return(
        <header className={styles.header}>
            <Logo />
            <Navbar />
            <Button buttonURL="#" buttonClassName="red_btn" buttonName="Login"/>
        </header>
    );
};

export default Header;