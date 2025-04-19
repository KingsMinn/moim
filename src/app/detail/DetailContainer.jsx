"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "../../components/ui/button";

export default function DetailContainer({ params, result, itemId }) {
  const parsedResult = JSON.parse(result);
  // const parsedParams = JSON.parse(params);
  const router = useRouter();
  console.log(new Date());

  return (
    <div className="w-[732px]">
      <h1 className="font-bold text-[24px]">{parsedResult.title}</h1>
      <p className="font-normal text-[14px]">{parsedResult.userName}</p>
      <p className="font-normal text-[14px]">{parsedResult.content}</p>
      <Link className={buttonVariants()} href={`/edit/${itemId}`}>
        수정하기
      </Link>
      <Button
        onClick={() =>
          fetch("/api/post/delete", {
            method: "DELETE",
            body: itemId,
          }).then(() => router.push("/"))
        }
      >
        삭제하기
      </Button>
      <Button
        onClick={() =>
          fetch("/api/post/like", {
            method: "POST",
            body: itemId,
          }).then(() => router.refresh())
        }
      >
        {parsedResult.likes} 좋아요
      </Button>
    </div>
  );
}
