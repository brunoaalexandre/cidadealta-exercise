import { useEffect, useState } from "react";

import logoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";

import { api } from "../../services/api";

import { Container, LeftContent, RightContent } from "./styles";

interface usersProps {
  id: number;
  nome: string;
  senha: string;
}

export function Login() {
  const [users, setUsers] = useState<usersProps[]>([]);
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    api.get("usuarios").then((response) => setUsers(response.data));
  }, []);

  async function handleLogin(nome: string, senha: string) {
    const userData = await users.find((user) => user.nome === nome);

    console.log(nome);
    console.log(senha);

    if (userData && senha === userData.senha) {
      await localStorage.setItem(`@pmcda-token`, userData.nome);
      document.location.reload();
    } else {
      alert("Login ou senha inválida");
    }
  }

  return (
    <Container>
      <LeftContent>
        <h1>
          Área
          <br /> Restrita
        </h1>
        <p>Departamento da Polícia Militar - Cidade Alta</p>
      </LeftContent>

      <RightContent>
        <img
          src={logoImg}
          alt="Departamento de Polícia Militar - Cidade Alta"
        />
        <form>
          <input
            placeholder="Login"
            onChange={(event) => setNome(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => setSenha(event.target.value)}
          />
          {/* <Link to="/"> */}
          <button type="button" onClick={() => handleLogin(nome, senha)}>
            Login
          </button>
          {/* </Link> */}
        </form>
      </RightContent>
    </Container>
  );
}
