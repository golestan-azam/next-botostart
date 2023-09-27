import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import { categories } from "@/constants/strings";
import styles from "@/module/Sidebar.module.css";

function SideBar(props) {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {/* <Link href="/buy-residential?category=villa">ویلا</Link> */}
      {/* <Link href={{pathname: "/buy-residential", query: {category: "villa"}}}>ویلا</Link> */}
      {Object.keys(categories).map((i) => (
        <Link
          href={{
            pathname: "/buy-residential",
            query: { category: i },
          }}
        >
          {categories[i]}
        </Link>
      ))}
    </div>
  );
}

export default SideBar;
