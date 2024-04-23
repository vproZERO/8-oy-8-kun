import React from "react"
import { useForm } from "react-hook-form"
import { postTodos } from "@/service/todo"

// interface Props {
//     title: string,
//     views: number
// }

export const Form:React.FC = () => {
    // const {register, handleSubmit} = useForm<Props>()

    // const submit = async (data: Props) => {
        
    // }

    return (
        <form action={postTodos}>
            <div>
                <input className="bg-gray-200 border rounded border-gray-600 py-2 pl-2 pr-10 mb-3" type="text" name="title" />
            </div>
            <div>
                <input className="bg-gray-200 border rounded border-gray-600 py-2 pl-2 pr-10 mb-10" type="text" name="views" />
            </div>
            <button className="mb-10 py-1 px-2 bg-blue-600 rounded text-white" type="submit">Submit</button>
        </form>
    )
}