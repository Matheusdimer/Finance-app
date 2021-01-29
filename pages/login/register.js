import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Background } from "../../src/components/Background";
import { ThemeContext } from "../../src/theme/ThemeProvider";
import {
  AuthCard,
  Form,
  Input,
  Button,
  InputError,
} from "../../src/components/Auth";
import register from "../../src/api/register";

export default function Register() {
  const theme = useContext(ThemeContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("none");

  const router = useRouter();

  async function submit(event) {
    event.preventDefault();

    const response = await register(email, name, password);
    console.log(response);

    if (response.loggedIn) {
      router.push('/login')
    } else {
      setError(response.fieldErr)
    }
  }
  return (
    <Background theme={theme}>
      <AuthCard theme={theme}>
        <Form onSubmit={submit} className="animated-left">
          <label>
            Nome
            {error === 'name' && <InputError>Não preenchido</InputError>}
          </label>
          <Input
            theme={theme}
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
            error={error === 'name' ? true : false}
          ></Input>
          <label>
            Email
            {error === 'email' && <InputError>Usuário já existente</InputError>}
          </label>
          <Input
            theme={theme}
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            error={error === 'email' ? true : false}
          ></Input>
          <label>
            Senha
            {error === 'password' && <InputError>Não preenchido</InputError>}
          </label>
          <Input
            theme={theme}
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            error={error === 'password' ? true : false}
          ></Input>

          <Button theme={theme} type="submit">
            Cadastrar
          </Button>
        </Form>
      </AuthCard>
    </Background>
  );
}
