import { prisma } from "../lib/prisma";

export default async function Home() {
  const properties = await prisma.property.findMany();
  const users = await prisma.user.findMany();

  return (
    <main style={{ padding: "40px" }}>
      <h1>不動産サイト</h1>

      {users.map((u) => (
        <div key={u.id} 
        style={{
          border: "1px solid gray",
          padding: "20px",
          marginTop: "20px",
          }}
        >
          <header>{u.id}</header>
          <header>{u.email}</header>
          <h5>{u.name}</h5>
        </div>
      ))}

      {properties.map((p) => (
        <div key={p.id} 
        style={{
          border: "1px solid gray",
          padding: "20px",
          marginTop: "20px",
          }}
        >
          <h2>{p.title}</h2>
          <p>{p.price}</p>
          <p>{p.location}</p>
        </div>
      ))}
    </main>
  );
}
