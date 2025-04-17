import connectDB from "@/utils/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  console.log(props.params.id);

  return (
    <>
      <h1>수정하기</h1>
      <form action="/api/post/edit" method="POST">
        <input
          name="_id"
          placeholder="제목"
          defaultValue={result._id.toString()}
          style={{ display: "none" }}
        />
        <input name="title" placeholder="제목" defaultValue={result.title} />
        <textarea
          name="content"
          placeholder="내용"
          defaultValue={result.content}
        />
        <button type="submit">수정하기</button>
      </form>
    </>
  );
}
