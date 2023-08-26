import styles from "@/template/DashboardPage.module.css";

function DashboardPage(props) {
  return (
    <div className={styles.container}>
      <h3>سلام 🖐</h3>
      <p>آگهی های خود را ثبت نمایید تا هزاران نفر آن را مشاهده کنند.</p>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت:</p>
        <span>45647645</span>
      </div>
    </div>
  );
}

export default DashboardPage;
