import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { BiCalendarCheck } from "react-icons/bi";
import styles from "@/template/DetailsPage.module.css";
import ItemList from "@/module/ItemList";
import Title from "@/module/Title";

function DetailesPage({ data }) {
  const categories = {
    apartment: "آپارتمان",
    villa: "ویلا",
    store: "مغازه",
    office: "دفتر",
  };

  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{data.title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {data.location}
        </span>
        {/* <h3 className={styles.title}>توضیحات</h3> */}
        <Title>توضیحات</Title>
        <p>{data.description}</p>
        {/* <h3 className={styles.title}>امکانات</h3> */}
        <Title>امکانات رفاهی</Title>
        {/* {data.amenities.length ? (
          <ul>
            {data.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        ) : (
          <p>هیچ موردی ذکر نشده است.</p>
        )} */}
        <ItemList data={data.amenities} />

        {/* <h3 className={styles.title}>قوانین</h3> */}
        <Title>قوانین</Title>
        <ItemList data={data.rules} />
      </div>
      <div className={styles.sidebar}></div>
    </div>
  );
}

export default DetailesPage;
