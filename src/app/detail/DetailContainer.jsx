"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DetailContainer({ params, result }) {
  const parsedResult = JSON.parse(result);
  const parsedParams = JSON.parse(params);
  const router = useRouter();

  return (
    <>
      <h1>{parsedResult.title}</h1>
      <p>{parsedResult.content}</p>
      <Link href={`/edit/${parsedParams.id}`}>수정하기</Link>
      <button
        onClick={() =>
          fetch("/api/post/delete", {
            method: "DELETE",
            body: parsedParams.id,
          }).then(() => router.push("/"))
        }
      >
        삭제하기
      </button>
    </>
  );
}
