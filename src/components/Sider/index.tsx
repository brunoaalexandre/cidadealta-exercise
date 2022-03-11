import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.png";

import { Logo } from "./styles";

const { Sider } = Layout;
const { Item } = Menu;

interface CollapsedProps {
  collapse: boolean;
  handleOnCollapse: () => void;
}

export function SiderComponent({ collapse, handleOnCollapse }: CollapsedProps) {
  return (
    <Sider
      collapsible
      collapsed={collapse}
      onCollapse={handleOnCollapse}
      trigger={null}
      style={{
        minHeight: "100vh",
        textAlign: "center",
        paddingTop: "15px",
        paddingBottom: "15px",
      }}
    >
      <Logo src={logoImg} alt="Polícia Militar - Cidade Alta" />
      <Menu theme="dark" mode="inline">
        <Item key="1">
          <Link to="/">Início</Link>
        </Item>
        <Item key="3">
          <Link to="/register">Cadastrar Código Penal</Link>
        </Item>
      </Menu>
    </Sider>
  );
}
