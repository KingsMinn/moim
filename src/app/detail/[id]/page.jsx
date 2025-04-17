import connectDB from "@/utils/database";
import { ObjectId } from "mongodb";
import Link from "next/link";
import DetailContainer from "../DetailContainer";

async function Detail({ params }) {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(params.id) });
  console.log(params.id);
  console.log(params);

  return (
    <>
      <Link href="/">돌아가기</Link>
      <DetailContainer
        params={JSON.stringify(params)}
        result={JSON.stringify(result)}
      />
    </>
  );
}
export default Detail;
