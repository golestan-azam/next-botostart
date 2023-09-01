import { HiFilter } from "react-icons/hi";
import styles from "@/module/Sidebar.module.css";
import Link from "next/link";

function SideBar(props) {
  const queries = [
    { villa: "ویلا" },
    { apartment: "آپارتمان" },
    { store: "مغازه" },
    { office: "دفتر" },
  ];

  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {/* <Link href="/buy-residential?category=villa">ویلا</Link> */}
      {/* <Link href={{pathname: "/buy-residential", query: {category: "villa"}}}>ویلا</Link> */}
      {queries.map((query) => (
        <Link
          href={{ pathname: "/buy-residential", query: { category: Object.keys(query) } }}
        >
          {Object.values(query)}
        </Link>
      ))}
    </div>
  );
}

export default SideBar;
