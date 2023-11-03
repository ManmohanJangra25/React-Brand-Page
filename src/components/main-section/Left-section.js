import styles from './Left-section.module.css';
import Button from '../common-elements/buttons/Button';
import Image from '../common-elements/Image';
import flipkartLogo from '../../images/flipkart.png';
import AmazonLogo from '../../images/amazon.png';

const LeftSection = () => {
    return (
        <div className={styles.leftSection}>
            <div className={styles.leftContent}>
                <h1 className={styles.headLine}>Your Feet Deserve The Best</h1>
                <p className={styles.tagLine}>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            </div>
            <div className={styles.leftSecBtn}>
                <Button buttonURL="#" buttonClassName="red_btn" buttonName="Shop Now"/>
                <Button buttonURL="#" buttonClassName="white_btn" buttonName="Category"/>
            </div>
            <div className={styles.leftSecAvail}>
                <Image imgSource={flipkartLogo} imgAlt="flipkart"/>
                <Image imgSource={AmazonLogo} imgAlt="Amazon"/>
            </div>
        </div>
    )
};

export default LeftSection;