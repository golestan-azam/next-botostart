import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import styles from "@/template/HomePage.module.css";
import CtegoryCard from "@/module/CtegoryCard";

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
      <div className={styles.categories}>
        <CtegoryCard title="خانه ویلایی" name="villa" />
        <CtegoryCard title="آپارتمان" name="apartment" />
        <CtegoryCard title="مغازه" name="store" />
        <CtegoryCard title="دفتر کار" name="office" />         
        
        {/* {Object.keys(categories).map((i) => (
          <CtegoryCard name={i} title={categories[i]} />
        ))} */}
      </div>
      <div className={styles.city}>
        <h3>شهرهای پربازدید</h3>
        <ul>
          {cities.map(i => (
            <li key={i}>
              <FaCity /> 
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
