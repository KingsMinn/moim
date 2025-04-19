import axios from "axios";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function write() {
  let session = await getServerSession(authOptions);
  console.log(session?.user.name);
  const response = await axios.get("https://api.ipify.org?format=json");
  console.log(response.data.ip);
  return (
    <>
      <h1>쓰기</h1>
      <form action="/api/post/new" method="POST">
        {/* <input
          readOnly
          name="user"
          value={session?.user.name || response.data.ip}
        />
        <input disabled name="likes" value={0} /> */}
        <input name="title" placeholder="제목" />
        <textarea name="content" placeholder="내용" />
        <button type="submit">올리기</button>
      </form>
    </>
  );
}
