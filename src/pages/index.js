import { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "../theme/ThemeProvider";
import { Header, HeaderTitle } from "../styles/Application";
import { CentralContent, RowContent } from "../styles/General";

export default function Home() {
  const theme = useContext(ThemeContext);

  return (
    <CentralContent>
      <Header theme={theme}>
        <HeaderTitle>Finance-app $</HeaderTitle>
        <RowContent>
          <Link href="/login">
            <a style={{ color: "#fff" }}>Login</a>
          </Link>
          <Link href="/register">
            <a style={{ color: "#fff" }}>Cadastre-se</a>
          </Link>
        </RowContent>
      </Header>

      <h1 style={{textAlign: "center"}}>Um lugar para controlar todas as suas finanças.</h1>
      <p style={{textAlign: "center"}}>Tenha o total controle do seu dinheiro</p>
    </CentralContent>
  );
}
