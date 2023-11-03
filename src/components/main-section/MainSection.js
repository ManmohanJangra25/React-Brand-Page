import styles from "./MainSection.module.css";
import LeftSection from "./Left-section";
import RightSection from "./Right-section";

const MainSection = () => {
    return (
        <main className={styles.mainSec}>
            <LeftSection/>
            <RightSection/>
        </main>
    );
};

export default MainSection;