"use client";

import { signIn, signOut } from "next-auth/react";

export default function LoginBtn({ name = null }) {
  return (
    <>
      <button onClick={() => signIn()}>
        {name ? `안녕 ${name}` : `로그인`}
      </button>
      {name && (
        <button
          onClick={() => {
            signOut();
          }}
        >
          로그아웃
        </button>
      )}
    </>
  );
}
