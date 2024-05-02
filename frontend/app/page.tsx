'use client'
import Image from "next/image";
import Counter from './counter';
import TodoList from "./todolist";
// interface MyComponentProps {
//   count: number;
// }
// function ListComponent({count}:MyComponentProps): JSX.Element | null {
//   const items = ["Первый", <ListComponent count={count - 1}></ListComponent>, "Пункт 3"];
//   if (count <= 0) {
//     return null; 
//   }
//   return (
//       <ul className="content flex">
//         {items.map((item, index) => (
//           <li className="content" key={index}>{item}</li>
//         ))}
//       </ul>
//   );
// }
export default function Home() {
  
  return (
    <main>
      <TodoList />     
    </main>
  );
}
