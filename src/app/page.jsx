import Link from "next/link";
import connectDB from "../utils/database";
import List from "./List";
import { buttonVariants } from "@/components/ui/button";

import { Table, TableBody } from "@/components/ui/table";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="flex flex-col justify-center items-center">
      <Link
        className={`${buttonVariants({ className: "text-white w-full" })}`}
        href="/write"
      >
        글쓰기
      </Link>
      <div className="w-[80vw]">
        <img
          src="https://i.ibb.co/Y7Qxy7dx/rnasterpiece.jpg"
          alt="rnasterpiece"
          border="0"
        />
        <Table>
          <TableBody>
            {result.length > 0 ? (
              result.map((v, i) => (
                <List
                  id={v._id.toString()}
                  title={v.title}
                  content={v.content}
                  userName={v.userName}
                  likes={v.likes}
                  createdAt={String(v.createdAt)}
                  key={i}
                />
              ))
            ) : (
              <span>loading</span>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
