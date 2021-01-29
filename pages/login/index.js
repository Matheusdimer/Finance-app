import { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Background } from "../../src/components/Background";
import { ThemeContext } from "../../src/theme/ThemeProvider";
import {
  AuthCard,
  Form,
  Input,
  Button,
  CentralContent,
  InputError,
} from "../../src/components/Auth";

import authenticate from "../../src/api/authenticate";

export default function Login() {
  const theme = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('none');
  const router = useRouter();

  async function submit(event) {
    event.preventDefault();
    const response = await authenticate(email, password);

    if (response.loggedIn) {
      sessionStorage.setItem("session", JSON.stringify(response));

      router.push('/app')
    } else {
      setError(response.fieldErr)
    }
  }

  return (
    <Background theme={theme}>
      <AuthCard theme={theme}>
        <Form onSubmit={submit}>
          <label>
            Email
            {error === 'email' && <InputError>Usuário não encontrado</InputError>}
          </label>
          <Input
            theme={theme}
            type="email"
            onChange={({ target }) => setEmail(target.value)}
            value={email}
            error={error === 'email' ? true : false}
          ></Input>
          <label>
            Senha
            {error === 'password' && <InputError>Senha inválida</InputError>}
          </label>
          <Input
            theme={theme}
            type="password"
            onChange={({ target }) => setPassword(target.value)}
            value={password}
            error={error === 'password' ? true : false}
          ></Input>
          <Button theme={theme} type="submit">
            Login
          </Button>
        </Form>
        <CentralContent>
          <Link href="/login/forgot-password">
            <a>Esqueci minha senha</a>
          </Link>
          <p>Não possui uma conta?</p>
          <Link className="link" href="/login/register">
            <a>Cadastre-se</a>
          </Link>
        </CentralContent>
      </AuthCard>
    </Background>
  );
}
