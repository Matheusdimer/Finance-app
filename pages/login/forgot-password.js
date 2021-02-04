import { useState, useContext } from 'react';
import { Background } from '../../src/styles/Background';
import { ThemeContext } from '../../src/theme/ThemeProvider';
import { AuthCard, Form, Input, Button, InputError } from '../../src/styles/Auth';

export default function Register() {
  const theme = useContext(ThemeContext);
  const error = false;
  
  function submit(event) {
    event.preventDefault();
  }
  return (
    <Background theme={theme}>
      <AuthCard theme={theme}>
        <div className="animated-left">
          <h2>Redefinir Senha</h2>
          <p>Fique tranquilo!</p>
          <p>Iremos lhe enviar um email com um link onde você poderá redefinir sua senha.</p>
        </div>
        <Form onSubmit={submit} className="animated-left">
          <label>
            Email
            {error && <InputError>Usuário não encontrado</InputError>}
          </label>
          <Input theme={theme} type="email" ></Input>         
          <Button theme={theme} type="submit">Enviar confirmação</Button>
        </Form>
      </AuthCard>
    </Background>
  )
}