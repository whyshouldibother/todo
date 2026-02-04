import Retrive from "@lib/retrive/retriveOne";
import update from "@lib/update/update";
import remove from "@lib/delete/delete";
import { redirect } from "next/navigation";
const todo = async (id:number) => {
  return await Retrive(id);
};
async function handleUpdate(formData:FormData) {
  "use server";
  const id = formData.get("id");
  const title = formData.get("title");
  const description = formData.get("description");
  const is_completed = formData.get("is_completed") === "on" ? true : false;
  const created_at = formData.get("created_at");
  await update({
    id: id,
    title: title,
    description: description,
    is_completed: is_completed,
    created_at: created_at,
  });
  redirect(`/${id}`);
}
async function handleDelete(formData:FormData) {
  "use server";
  await remove(formData.get("id"));
  redirect("/");
}
export default async function Page({ params }:{params: {id:number}}) {
  const { id } = await params;
  const data = await todo(id);
  return (
    <div className="h-screen w-full bg-gray-100 flex items-center justify-center p-6">
      <form className="bg-white rounded-xl shadow-md w-full max-w-lg p-6">
        <h1>Todo Details</h1>
        <label className="block text-gray-700 font-semibold mb-1">id</label>
        <input
          name="id"
          value={data.id}
          readOnly
          className="w-full border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
        />
        <label className="block text-gray-700 font-semibold mb-1">title</label>
        <input
          name="title"
          defaultValue={data.title}
          className="w-full border-gray-300 rounded-lg px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="block text-gray-700 font-semibold mb-1">
          description
        </label>
        <textarea
          name="description"
          defaultValue={data.description}
          className="w-full border-gray-300 rounded-lg px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center gap-2">
          <label className="block text-gray-700 font-semibold mb-1">
            created_at
          </label>
          <input name="created_at" defaultValue={data.created_at} readOnly />
        </div>
        <div className="flex items-center gap-2">
          <input
            name="is_completed"
            defaultChecked={data.is_completed}
            type="checkbox"
            className="w-5 h-5 text-blue-600 border-gray-300 rounded"
          />
          <label className="block text-gray-700 font-semibold mb-1">
            is_completed
          </label>
        </div>
        <div className="flex gap-4 mt-4">
          <button
            formAction={handleUpdate}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:shadow-lg cursor-pointer transition"
          >
            Update
          </button>
          <button
            formAction={handleDelete}
            className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:shadow-lg cursor-pointer transition"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
