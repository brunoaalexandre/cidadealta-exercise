import { Dropdown, Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined } from "@ant-design/icons";

import { Content } from "./styles";

const { Header } = Layout;

interface CollapsedProps {
  collapse: boolean;
  handleOnCollapse: () => void;
}

export function HeaderComponent({
  collapse,
  handleOnCollapse,
}: CollapsedProps) {

  function handleLogout() {
    localStorage.removeItem("@pmcda-token");
    document.location.reload();
  }

  return (
    <Header style={{ padding: 0, backgroundColor: "#fff" }}>
      <Content>
        <div onClick={handleLogout}>
          <span>
            <LogoutOutlined />
          </span>
        </div>
      </Content>
    </Header>
  );
}
