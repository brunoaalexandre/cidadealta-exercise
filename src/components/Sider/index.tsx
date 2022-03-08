import { Layout, Menu } from "antd";

import { Logo } from "./styles";

import logoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const { Sider } = Layout;
const { Item } = Menu;

interface CollapsedProps {
  collapse: boolean;
  handleOnCollapse: () => void;
}

export function SiderComponent({ collapse, handleOnCollapse }: CollapsedProps) {
  const [selectedKey, setSelectedKey] = useState(1);
  return (
    <Sider
      collapsible
      collapsed={collapse}
      onCollapse={handleOnCollapse}
      trigger={null}
      style={{ minHeight: '100vh' }}
    >
      <Logo src={logoImg} alt="Polícia Militar - Cidade Alta" />
      <Menu theme="dark" defaultSelectedKeys={[`${selectedKey}`]} mode="inline">
        <Item key="1" onClick={() => setSelectedKey(1)}><Link to="/">Início</Link></Item>
        <Item key="2" onClick={() => setSelectedKey(2)}>Códigos Penais</Item>
        <Item key="3" onClick={() => setSelectedKey(3)}><Link to="/register">Cadastrar Código Penal</Link></Item>
        <Item key="4" onClick={() => setSelectedKey(4)}>Editar Código Penal</Item>
      </Menu>
    </Sider>
  );
}
