"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";

export default function LoginBtn({ name = null }) {
  return (
    <>
      {name ? (
        <>
          <p className="mr-4">{`안녕 ${name}`}</p>
          <Button
            className="cursor-pointer"
            onClick={() => {
              signOut();
            }}
          >
            로그아웃
          </Button>
        </>
      ) : (
        <Button className="w-20 cursor-pointer" onClick={() => signIn()}>
          로그인
        </Button>
      )}
    </>
  );
}
