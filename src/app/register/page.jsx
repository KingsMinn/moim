import { Button } from "@/components/ui/button";

export default function Register() {
  return (
    <div className="m-auto">
      <h1>반갑습ㄴ다</h1>
      <form method="POST" action="/api/auth/signup" className="flex flex-col">
        <input name="userName" type="text" placeholder="이름" />
        <input name="userId" type="text" placeholder="아이디" />
        <input name="password" type="password" placeholder="비번" />
        <Button type="submit">가입</Button>
      </form>
    </div>
  );
}
