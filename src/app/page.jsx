import Link from "next/link";
import connectDB from "../utils/database";
import { signIn } from "next-auth/react";
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export const dynamic = "force-dynamic";

function List({ id, title, content }) {
  return (
    <li>
      <Link href={`/detail/${id}`}>{title}</Link>
      <br />
      <span>{content}</span>
    </li>
  );
}

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  let session = await getServerSession(authOptions);

  return (
    <div>
      <LoginBtn name={session?.user.name} />
      <Link href="/write">글쓰기</Link>
      <ul>
        {result.length > 0 ? (
          result.map((v, i) => (
            <List
              id={v._id.toString()}
              title={v.title}
              content={v.content}
              key={i}
            />
          ))
        ) : (
          <span>loading</span>
        )}
      </ul>
    </div>
  );
}
