"use client";

import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Card from "@/module/Card";
import styles from "@/module/DashboardCard.module.css";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import Loader from "@/module/Loader";

function DashboardCard({ data }) {
  const router = useRouter();
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };

  const [loading, setLoading] = useState(false);

  const deleteHandler = async () => {
    setLoading(true);
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    console.log(result);
    setLoading(false);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <Card data={data} />
          <div className={styles.main}>
            <button onClick={editHandler}>
              ویرایش
              <FiEdit />
            </button>
            <button onClick={deleteHandler}>
              حذف آگهی
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      )}
      <Toaster />
    </>
  );
}

export default DashboardCard;
