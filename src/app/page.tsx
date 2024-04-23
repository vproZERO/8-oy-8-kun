import { Card } from "@/components/card"
import { getData } from "@/service/todo";

export default async function Home() {
  const data = await getData()
  return (
    <div>
      {data.map((todo) => (
        <Card key={todo.id} {...todo}/>
      ))}
    </div>
  );
}
