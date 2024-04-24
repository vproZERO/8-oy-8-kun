"use client";
import { TodoData } from "@/types/todo";
import { deleteData } from "@/service/todo";
import React from "react";

export const Card: React.FC<TodoData> = ({ id, title, views }) => {
  const deleteItems = async () => {
    const res = await deleteData(id);

    if (res) {
      alert("deleted");
    }
  };
  return (
    <div>
      <h1 className="">{title}</h1>
      <p className="">{views}</p>
      <button className="py-1 px-2 rounded bg-red-600 text-white mb-10" onClick={deleteItems}>delete</button>
    </div>
  );
};
