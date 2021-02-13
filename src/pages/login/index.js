import { useState, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Background } from "../../styles/Background";
import { ThemeContext } from "../../theme/ThemeProvider";
import {
  AuthCard,
  Form,
  Input,
  Button,
  CentralContent,
  InputError,
} from "../../styles/Auth";
import CircularProgress from '@material-ui/core/CircularProgress';

import authenticate from "../../api/authenticate";

export default function Login() {
  const theme = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('none');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    const response = await authenticate(email, password);

    if (response.loggedIn) {
      sessionStorage.setItem("session", JSON.stringify(response));

      router.push('/app')
    } else {
      setError(response.fieldErr)
      setLoading(false);
    }
  }

  return (
    <Background theme={theme}>
      <Head>
        <title>Login</title>
      </Head>
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
            {loading ? <CircularProgress color="inherit" size={28} /> : "Login"}
          </Button>
        </Form>
        <CentralContent>
          <Link href="/login/forgot-password">
            <a style={{paddingTop: 15}}>Esqueci minha senha</a>
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
