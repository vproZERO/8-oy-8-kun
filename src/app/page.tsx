import { Card } from "@/components/card"
import { Form } from "@/components/form";
import { getData } from "@/service/todo";

export default async function Home() {
  const data = await getData()
  return (
    <div className="px-10 py-10">
      <Form/>
      {data.map((todo) => (
        <Card key={todo.id} {...todo}/>
      ))}
    </div>
  );
}
