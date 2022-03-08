import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Content } from "./styles";

const { Header } = Layout;

interface CollapsedProps {
  collapse: boolean;
  handleOnCollapse: () => void;
}

export function HeaderComponent({ collapse, handleOnCollapse }: CollapsedProps) {
  return (
    <Header style={{ padding: 0, backgroundColor: "#fff" }}>
      <Content>
        <button type="button" onClick={handleOnCollapse} style={{ fontSize: '20px'}}>
          {collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </button>
        <div>
          <span>B</span>
        </div>
      </Content>

    </Header>
  );
}
