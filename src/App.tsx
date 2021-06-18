import { Card, Layout } from "antd";
import { Page } from "./Page";
import "./App.less";
import logo from "./logo.png";

function App() {
  return (
    <Layout>
      <Layout.Content>
        <Page>
          <Card
            style={{ margin: "4rem", maxWidth: 500 }}
            cover={<img alt="Logo" src={logo} style={{}} />}
            hoverable={true}
            bordered={false}
            bodyStyle={{ display: "none" }}
          />
        </Page>
      </Layout.Content>
    </Layout>
  );
}

export default App;
