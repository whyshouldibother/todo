import Retrive from "@lib/retrive/retriveOne";
import update from "@lib/update/update";
import remove from "@lib/delete/delete";
import {redirect} from "next/navigation";
const todo = async (id) => {
  return await Retrive(id);
};
async function handleUpdate(formData) {
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
async function handleDelete(formData) {
  "use server";
  await remove(formData.get("id"));
  redirect("/");
}
export default async function Page({ params }) {
  const { id } = await params;
  const data = await todo(id);
  return (
    <>
      <form>
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>id</td>
              <td>
                <input name="id" value={data.id} readOnly />
              </td>
            </tr>
            <tr>
              <td>title</td>
              <td>
                <input name="title" defaultValue={data.title} />
              </td>
            </tr>
            <tr>
              <td>description</td>
              <td>
                <input name="description" defaultValue={data.description} />
              </td>
            </tr>
            <tr>
              <td>is_completed</td>
              <td>
                <input
                  name="is_completed"
                  defaultChecked={data.is_completed}
                  type="checkbox"
                />
              </td>
            </tr>
            <tr>
              <td>created_at</td>
              <td>
                <input
                  name="created_at"
                  defaultValue={data.created_at}
                  readOnly
                />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <button formAction={handleUpdate}>Update</button>
              </td>
              <td>
                <button formAction={handleDelete}>Delete</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </form>
    </>
  );
}
