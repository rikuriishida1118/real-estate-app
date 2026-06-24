import Link from "next/link";

export default async function Home() {
  return (
    <main style={{ padding: "40px" }}>
        <h1>お客様情報登録</h1>
        <Link href="/login">
         ログイン
        </Link>
        <Link href="/userregistration">
         新規登録
        </Link>
        <Link href="/">
         戻る
        </Link>
    </main>
  );
}
