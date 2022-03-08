import { Layout } from "antd";
import { useState } from "react";

import { HeaderComponent } from "../../components/Header";
import { SiderComponent } from "../../components/Sider";

interface MainProps {
  content: JSX.Element;
}

export function Main({ content }: MainProps) {
  const [collapsed, setCollapsed] = useState(false);

  function handleOnCollapse() {
    setCollapsed(true);

    if (collapsed) {
      setCollapsed(false);
    }
  }
  return (
    <Layout>
      <SiderComponent collapse={collapsed} handleOnCollapse={handleOnCollapse} />
      <Layout>
        <HeaderComponent collapse={collapsed} handleOnCollapse={handleOnCollapse} />
        {content}
      </Layout>
    </Layout>

  );
}


