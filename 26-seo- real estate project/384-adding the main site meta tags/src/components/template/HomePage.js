import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import CtegoryCard from "@/module/CtegoryCard";
import { categories, cities, services } from "@/constants/strings";
import styles from "@/template/HomePage.module.css";

function HomePage(props) {
    
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
        {/* <CtegoryCard title="خانه ویلایی" name="villa" />
        <CtegoryCard title="آپارتمان" name="apartment" />
        <CtegoryCard title="مغازه" name="store" />
        <CtegoryCard title="دفتر کار" name="office" />          */}
        
        {Object.keys(categories).map((i) => (
          <CtegoryCard title={categories[i]} name={i} />
        ))}
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
