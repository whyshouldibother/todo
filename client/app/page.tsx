"use client";
import RetriveAll from "@lib/retrive/retriveAll.js";
import Create from "@lib/create/create.js";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
async function handleCreate(formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  await Create({ title: title, description: description });
  redirect("/");
}
export default function App() {
  const [data, setData] = useState([]);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  async function fetchTodos(page) {
    const todo = await RetriveAll(page);
    await setData(todo.results);
    await setPrev(todo.previous);
    await setNext(todo.next);
    console.log(prev, next)
  }
  useEffect(() => {
    async function loadTodos() {
      const todo = await RetriveAll();
      setData(todo.results);
      setNext(todo.next);
      setPrev(todo.previous);
    }
    loadTodos();
  }, []);
  return (
    <div className="flex flex-col border items-center w-full bg-[#f9f9f9] h-screen">
      <h1 className="text-5xl text-[#333]">Todos</h1>
      <div className="w-1/2 bg-[#fff] rounded-2xl shadow-2xl p-10">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2 bg-[#f0f0f0] m-10 w-1/2">Task</th>
              <th className="text-left p-2 bg-[#f0f0f0] m-10 w-1/2">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  key={item.id}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-[#f0f0f0]"}`}
                >
                  <td className="p-2">
                    <Link href={`/${item.id}`}>{item.title}</Link>
                  </td>
                  <td className="p-2">
                    {item.is_completed ? "Done" : item.description}
                  </td>
                </tr>
              );
            })}
          </tbody>
                
        </table>
        <div className="flex gap-2 justify-between">
        <button
                  className="w-full m-2 cursor-pointer rounded-sm bg-[#00a] text-white p-2"
                  onClick={() => {
                    prev && fetchTodos(prev);
                  }}
                >
                  Prev
                </button>
                <button
                  className="w-full m-2 cursor-pointer rounded-sm bg-[#00a] text-white p-2"
                  onClick={() => {
                    next && fetchTodos(next);
                  }}
                >
                  Next
                </button>
                </div>
        <form>
          <input
            name="title"
            className="w-2/6 m-2 border p-1 rounded-sm border-[#ccc]"
            placeholder="Enter new todo"
          />
          <input
            name="description"
            className="w-2/6 m-2 border p-1 rounded-sm border-[#ccc]"
            placeholder="Enter todo description"
          />
          <button
            type="submit"
            className="w-1/6 m-2 p-1 bg-[#28a745] cursor-pointer text-white rounded-sm"
            formAction={handleCreate}
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
}
