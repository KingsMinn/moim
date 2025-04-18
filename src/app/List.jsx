"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { useRouter } from "next/navigation";

export default function List({ id, title, content }) {
  const route = useRouter();
  return (
    <TableRow
      className="h-14 cursor-pointer"
      onClick={() => route.push(`/detail/${id}`)}
    >
      <TableCell>
        <div className="flex items-center gap-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400"
          >
            <path
              fill="currentColor"
              d="M12.001 4.529a6 6 0 0 1 8.242.228a6 6 0 0 1 .236 8.236l-8.48 8.492l-8.478-8.492a6 6 0 0 1 8.48-8.464m6.826 1.641a4 4 0 0 0-5.49-.153l-1.335 1.198l-1.336-1.197a4 4 0 0 0-5.686 5.605L12 18.654l7.02-7.03a4 4 0 0 0-.193-5.454"
            />
          </svg>
          {[1231232].toLocaleString()}
        </div>
      </TableCell>
      <TableCell className="font-medium max-w-[400px] text-ellipsis overflow-hidden">
        <p className="font-bold">{title}</p>
        <p className="text-ellipsis overflow-hidden text-xs text-gray-500">
          {content}
        </p>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400"
          >
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5m10.79-1.38a9.95 9.95 0 0 0-12.28 0A7.96 7.96 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12"
            />
            <path
              fill="currentColor"
              d="M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6m0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11"
            />
          </svg>
          작성자
        </div>
      </TableCell>
      <TableCell className="text-right">
        <div className="flex items-center gap-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400"
          >
            <path
              fill="currentColor"
              d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
            />
            <path
              fill="currentColor"
              d="M12.5 7H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"
            />
          </svg>
          날짜
        </div>
      </TableCell>
    </TableRow>
  );
}
