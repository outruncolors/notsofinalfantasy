import { Card, Menu, Layout } from "antd";
import {
  About,
  Circuits,
  Contribute,
  EnemyGlossary,
  HowToPlay,
  JobSystem,
  Map,
} from "./pages";
import { Page } from "./Page";
import { Link, Route } from "react-router-dom";
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
            <Menu.Item key="home">
              <Link to="/">About</Link>
            </Menu.Item>
            <Menu.Item key="how-to-play">
              <Link to="/how-to-play">How to Play</Link>
            </Menu.Item>
            <Menu.Item key="map">
              <Link to="/map">World Map</Link>
            </Menu.Item>
            <Menu.Item key="jobs">
              <Link to="/job-system">Job System</Link>
            </Menu.Item>
            <Menu.Item key="enemy-glossary">
              <Link to="/enemy-glossary">Enemy Glossary</Link>
            </Menu.Item>
            <Menu.Item key="circuits">
              <Link to="/circuits">Circuits</Link>
            </Menu.Item>
            <Menu.Item key="contribute">
              <Link to="/contribute">Contribute</Link>
            </Menu.Item>
          </Menu>

          <Route path="/" exact={true} component={About} />
          <Route path="/circuits" exact={true} component={Circuits} />
          <Route path="/contribute" exact={true} component={Contribute} />
          <Route
            path="/enemy-glossary"
            exact={true}
            component={EnemyGlossary}
          />
          <Route path="/how-to-play" exact={true} component={HowToPlay} />
          <Route path="/job-system" exact={true} component={JobSystem} />
          <Route path="/map" exact={true} component={Map} />
        </Page>
      </Layout.Content>
    </Layout>
  );
}

export default App;
