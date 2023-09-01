import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import styles from "@/template/HomePage.module.css";

function HomePage(props) {
  const services = ["خرید", "فروش", "رهن", "اجاره"];
  const cities = [
    "تهران",
    "سنندج",
    "کرمانشاه",
    "اهواز",
    "مشهد",
    "اصفهان",
    "شیراز",
    "خرم آباد",
  ];
  const categories = {
    apartment: "آپارتمان",
    villa: "ویلا",
    store: "مغازه",
    office: "دفتر",
  };
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((i) => (
              <li key={i}>
                <FiCircle /> 
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
