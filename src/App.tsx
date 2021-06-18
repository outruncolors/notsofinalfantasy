import { Alert, Card, Menu, Layout } from "antd";
import { Page } from "./Page";
import "./App.less";
import logo from "./logo.png";

function App() {
  return (
    <Layout>
      <Layout.Header style={{ margin: "2rem 11rem", alignItems: "flex-end" }}>
        <Card
          style={{
            margin: "4rem",
            maxWidth: 500,
            borderRadius: 4,
            border: "1px solid white",
          }}
          cover={<img alt="Logo" src={logo} style={{}} />}
          hoverable={true}
          bordered={false}
          bodyStyle={{ display: "none" }}
        />
      </Layout.Header>
      <Layout.Content>
        <Page>
          <Menu mode="horizontal" theme="light">
            <Menu.Item key="home">About</Menu.Item>
            <Menu.Item key="how-to-play">How to Play</Menu.Item>
            <Menu.Item key="jobs">Job System</Menu.Item>
            <Menu.Item key="enemy-glossary">Enemy Glossary</Menu.Item>
            <Menu.Item key="contribute">Contribute</Menu.Item>
          </Menu>
          <Alert
            type="info"
            message="Paying Tokens to Contributors"
            description={
              <>
                I am currently looking for talented Rec Room artists to make
                everything prettier! I'm offering to provide tokens (and credit,
                of course!) based on the work done. Visit the Contribute page
                for more info!
              </>
            }
            style={{ margin: "2rem" }}
            showIcon={true}
            closable={true}
          />
        </Page>
      </Layout.Content>
    </Layout>
  );
}

export default App;
