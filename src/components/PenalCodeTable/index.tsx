import { useEffect, useState } from "react";
import { Skeleton } from "antd";
import { PlusSquareOutlined, EditOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";

import { api } from "../../services/api";

import { Container } from "./styles";

import policeIcon from "../../assets/police.svg";
import { Link } from "react-router-dom";

interface PenalCodesProps {
  id: number;
  nome: string;
  dataCriacao: string;
  multa: number;
  status: number
}

export function PenalCodeTable() {
  const [codes, setCodes] = useState<PenalCodesProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('codigopenal')
      .then(response => setCodes(response.data))
      .then(() => setLoading(false));
  }, []);

  return (
    <Container style={{ background: '#fff' }}>
      <header>
        <div>
          <span>
            <img src={policeIcon} alt="Códigos Penais" />
          </span>
          <h1>Códigos Penais</h1>
        </div>
        <Link to="/register">
          <PlusSquareOutlined style={{ fontSize: '24px', color: '#00959E' }} />
        </Link>
      </header>

      {loading ? <Skeleton active /> :
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data</th>
              <th>Multa</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {codes.map(code => (
              <tr key={code.id}>
                <td>{code.nome}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(new Date(code.dataCriacao))}
                </td>
                <td>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(code.multa)}
                </td>
                <td>{code.status === 1 ? 'Ativo' : 'Inativo'}</td>
                <td>
                  <button>
                    <EditOutlined />
                  </button>
                  <button>
                    <EyeOutlined />
                  </button>
                  <button>
                    <DeleteOutlined />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </Container>
  );
}
