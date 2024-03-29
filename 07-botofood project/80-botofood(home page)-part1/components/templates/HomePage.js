import styles from "./HomePage.module.css";
import Banner from '../modules/Banner';
import Attributes from "../modules/Attributes";
import Definition from "../modules/Definition";

function HomePage(props) {
    return (
        <div className={styles.container}>
            <Banner />
            <Attributes />
            <Definition />
        </div>
    );
}

export default HomePage;