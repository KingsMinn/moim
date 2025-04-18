import Link from "next/link";
import connectDB from "../utils/database";
import { signIn } from "next-auth/react";
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { Button } from "@/components/ui/button";
import List from "./List";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const dynamic = "force-dynamic";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  let session = await getServerSession(authOptions);

  return (
    <div>
      <LoginBtn name={session?.user.name} />
      <Link href="/write">글쓰기</Link>
      <Button className="w-[200px]">asdf</Button>
      <Table className="overflow-hidden w-[80vw]">
        <TableBody className="overflow-hidden w-[400px]">
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
        </TableBody>
      </Table>

      <ul></ul>
    </div>
  );
}
