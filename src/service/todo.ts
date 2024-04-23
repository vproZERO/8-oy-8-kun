"use server";

import { TodoData } from "@/types/todo";
import { revalidatePath, revalidateTag } from "next/cache";

const getData = async (): Promise<TodoData[]> => {
  try {
    const res = await fetch("http://localhost:5000/posts", {
        next: { 
            tags: ["todos"]
        },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const deleteData = async (id: number): Promise<{}> => {
    try {
        const res = await fetch(`http://localhost:5000/posts/${id}`, {
            method: 'DELETE',
        })
        const data = await res.json()
        revalidateTag('todos')
        return data
    } catch (error) {
        throw new Error("error")
    }
}

export { getData , deleteData};