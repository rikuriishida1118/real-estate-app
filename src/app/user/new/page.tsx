"use client";

import { useState } from "react";
import Link from "next/link";

export default function UserCreatePage() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        name,
        phoneNumber: phoneNumber,
        email 
    }),
});

if (response.ok) {
    alert("ユーザ登録が完了しました。");
} else {
    alert("ユーザ登録に失敗しました。");
}
};

  return (
    <main style={{ padding: "40px" }}>
      <h1>新規ユーザ登録</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "400px",
        }}
      >
        <div>
          <label>名前</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>電話番号</label>
          <br />
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div>
          <label>メールアドレス</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">
          登録
        </button>
        <Link href="/">
          戻る
        </Link>
      </form>
    </main>
  );
}