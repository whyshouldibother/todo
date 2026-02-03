import RetriveAll from "@lib/retrive/retriveAll.js";
import Create from "@lib/create/create.js";
import Link from "next/link";
import { redirect } from "next/navigation";
async function handleCreate(formData) {
  "use server";
  const title = formData.get("title");
  const description = formData.get("description");
  await Create({ title: title, description: description});
  redirect("/");
}
export default async function App() {
  const todos = await RetriveAll();
  const data = todos.results;
  return (
    <div>
      <h1>Todos</h1>
      <table>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <Link href={`/${item.id}`}>{item.title}</Link>
                </td>
                <td>{item.is_completed ? "Done" : item.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Tittle</td>
              <td>
                <input name="title" />
              </td>
            </tr>
            <tr>
              <td >Description</td>
              <td>
                <input name="description" />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <button type="submit" formAction={handleCreate}>
                  Add Todo
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </form>
    </div>
  );
}
