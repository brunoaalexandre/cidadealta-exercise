import { Skeleton } from "antd";
import { PlusSquareOutlined, EditOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import policeIcon from "../../assets/police.svg";

import { Container } from "./styles";
import { usePenalCodes } from "../../hooks/usePenalCodes";

export function PenalCodeTable() {
  const { codes, loading } = usePenalCodes();

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
