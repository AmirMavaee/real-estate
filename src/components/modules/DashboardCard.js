"use client";
import styles from "@/modules/DashboardCard.module.css";
import Card from "@/modules/Card";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Loader from "./Loader";

function DashboardCard({ data }) {
  const router = useRouter();
  const [isDelete, setIsDelete] = useState(false);
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };
  const deleteHandler = async () => {
    setIsDelete(true);
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    setIsDelete(false);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };
  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        {isDelete ? (
          <Loader />
        ) : (
          <>
            <button onClick={editHandler}>
              ویرایش
              <FiEdit />
            </button>
            <button onClick={deleteHandler}>
              حذف
              <AiOutlineDelete />
            </button>
          </>
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default DashboardCard;
