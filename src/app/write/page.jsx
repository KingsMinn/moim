import { Button } from "@/components/ui/button";

export default async function write() {
  return (
    <>
      <h1>쓰기</h1>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="제목" />
        <textarea name="content" placeholder="내용" />
        <Button type="submit">올리기</Button>
      </form>
    </>
  );
}
