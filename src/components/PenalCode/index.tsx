import { Skeleton } from "antd";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface IdProps {
  id: string;
}

interface PenalCodeProps {
  nome: string;
  descricao: string;
  multa: number;
  status: number;
  tempoPrisao: number;
  dataCriacao: string;
}

export function PenalCode({ id }: IdProps) {
  const [loading, setLoading] = useState(true);
  const [penalCode, setPenalCode] = useState<PenalCodeProps>(
    {} as PenalCodeProps
  );

  useEffect(() => {
    api
      .get(`codigopenal/${id}`)
      .then((response) => setPenalCode(response.data))
      .then(() => setLoading(false));
  }, []);

  console.log(penalCode);

  return (
    <Container>
      {loading ? (
        <Skeleton active />
      ) : (
        <>
          <h1>Nome:</h1>
          <p>{penalCode.nome}</p>

          <h1>Descrição</h1>
          <p>{penalCode.descricao}</p>

          <h1>Valor da multa:</h1>
          <p>{new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(penalCode.multa)}</p>

          <h1>Tempo de prisão:</h1>
          <p>{penalCode.tempoPrisao}</p>

          <h1>Data de criação:</h1>
          <p>
            {new Intl.DateTimeFormat("pt-BR").format(
              new Date(penalCode.dataCriacao)
            )}
          </p>

          <h1>Status:</h1>
          <p>{penalCode.status === 1 ? "Ativo" : "Inativo"}</p>
        </>
      )}
    </Container>
  );
}

{
  /* <h1>Nome:</h1>
<p>{penalCode.nome}</p>

<h1>Descrição</h1>
<p>{penalCode.descricao}</p>

<h1>Valor da multa:</h1>
<p>{penalCode.multa}</p>

<h1>Tempo de prisão:</h1>
<p>{penalCode.tempoPrisao}</p>

<h1>Data de criação:</h1>
<p>{penalCode.dataCriacao}</p>

<h1>Status:</h1>
<p>{penalCode.status === 1 ? 'Ativo' : 'Inativo'}</p> */
}
