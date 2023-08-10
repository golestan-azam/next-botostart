import React from "react";
import { todos } from "@/data/todos";

function Todos({ data }) {
  return (
    <div>
      {data.map((todo) => (
        <h1 key={todo.id}>{todo.title}</h1>
      ))}
    </div>
  );
}

export default Todos;

export async function getStaticProps() {
  //   const res = await fetch("/api/todos");
  //   const data = await res.json(); ***** this wrong
  // api , getstaticprops هر دو سمت سرور هستن
  // کدها سمت فرانت نمی رود پس درست نیست اینجا دوباره به همان مسیر درخواست ارسال شود
  // پس هر دو به یک اندازه به دیتاها دسترسی دارن
  // پس مستقیم به دیتابیس درخواست می دهیم

  //  ولی اگر کدها سمت کلاینت اجرا شد در آنصورت میتوانید به
  // fetch("/api/todos"); درخواست بفرستید

  return {
    props: { data: todos },
  };
}
