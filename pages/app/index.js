import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function App() {
  const router = useRouter();
  const [session, setSession] = useState();

  useEffect(() => {
    const temp = sessionStorage.getItem("session");
    setSession(JSON.parse(temp));
  }, []);

  if (!session) {
    return <p>Você não está logado...</p>;
  }

  return (
    <div>
      <h1>Main Application</h1>
      <h2>Informações do Usuário</h2>
      <p>
        <b>Token:</b> {session.token}
      </p>
      <p>
        <b>Nome:</b> {session.user.name}
      </p>
    </div>
  );
}
