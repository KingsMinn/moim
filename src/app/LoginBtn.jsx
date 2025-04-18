"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";

export default function LoginBtn({ name = null }) {
  return (
    <>
      <Button className="w-20 cursor-pointer" onClick={() => signIn()}>
        {name ? `안녕 ${name}` : `로그인`}
      </Button>
      {name && (
        <Button
          onClick={() => {
            signOut();
          }}
        >
          로그아웃
        </Button>
      )}
    </>
  );
}
