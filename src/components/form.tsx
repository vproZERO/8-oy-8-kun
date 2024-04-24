"use client";
import React from "react";
import { postTodos } from "@/service/todo";

export const Form: React.FC = () => {
  return (
    <form className="mb-4" action={postTodos}>
      <div>
        <input className="border border-blue-400" name="title" type="text" />
      </div>
      <div>
        <input
          className="border border-blue-400"
          name="description"
          type="text"
        />
      </div>
      <button className="px-5 py-2 bg-blue-400" type="submit">
        send
      </button>
    </form>
  );
};
