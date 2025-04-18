"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { useRouter } from "next/navigation";

export default function List({ id, title, content }) {
  const route = useRouter();
  return (
    <TableRow
      className="h-10 cursor-pointer"
      onClick={() => route.push(`/detail/${id}`)}
    >
      <TableCell>좋아요</TableCell>
      <TableCell className="font-medium max-w-[200px] text-ellipsis overflow-hidden">
        {title}
      </TableCell>
      <TableCell>작성자</TableCell>
      <TableCell className="text-right">날짜</TableCell>
    </TableRow>
  );
}
