import connectDB from "@/utils/database";
import { ObjectId } from "mongodb";
import Link from "next/link";
import DetailContainer from "../DetailContainer";
import CommentContainer from "../CommentContainer";
import { buttonVariants } from "@/components/ui/button";

async function Detail({ params }) {
  const client = await connectDB;
  const db = client.db("forum");

  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(params.id) });

  let commentList = await db
    .collection("comment")
    .findOne({ postId: new ObjectId(params.id) });

  console.log(`post : ${JSON.stringify(result)}`);
  console.log(`comments : ${JSON.stringify(commentList)}`);

  const currentId = params?.id;

  return (
    <div className="flex flex-col">
      <Link
        href="/"
        className={buttonVariants({ className: "text-white w-20" })}
      >
        돌아가기
      </Link>
      <DetailContainer itemId={currentId} result={JSON.stringify(result)} />
      <CommentContainer
        itemId={currentId}
        commentList={JSON.stringify(commentList)}
      />
    </div>
  );
}
export default Detail;
