"use client";
import styles from "@/modules/TextList.module.css";
import { useState } from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function TextList({ title, type, profileData, setProfileData }) {
  const arr = profileData[type];

  const changeHandler = (e, index) => {
    const newTextArr = [...profileData[type]];
    newTextArr[index] = e.target.value;
    setProfileData({
      ...profileData,
      [type]: newTextArr,
    });
  };

  const deleteHandler = (index) => {
    const newArr = [...profileData[type]];
    newArr.splice(index, 1);

    setProfileData({
      ...profileData,
      [type]: newArr,
    });
  };

  const addHandler = () => {
    arr.push("");
    setProfileData({
      ...profileData,
      [type]: arr,
    });
  };

  return (
    <div className={styles.container}>
      <p>{title}</p>

      {profileData[type].map((item, index) => (
        <div key={index} className={styles.card}>
          <input
            value={item}
            type="text"
            onChange={(e) => changeHandler(e, index)}
          />
          <button onClick={() => deleteHandler(index)}>حذف <AiOutlineDelete/></button>
        </div>
      ))}

      <button onClick={addHandler}>
        افزودن <MdOutlineLibraryAdd />
      </button>
    </div>
  );
}

export default TextList;
