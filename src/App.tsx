import { Card, Menu, Layout } from "antd";
import {
  About,
  Circuits,
  Contribute,
  EnemyGlossary,
  HowToPlay,
  JobSystem,
  Map,
  SpecialThanks,
} from "./pages";
import { Page } from "./Page";
import { Link, Route } from "react-router-dom";
import "./App.less";
import { RiHome2Fill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import logo from "./logo.png";

function App() {
  return (
    <Layout>
      <Layout.Sider width="30%" style={{ zIndex: 1 }}>
        <Card
          style={{ padding: "1rem" }}
          cover={
            <img
              alt="Logo"
              src={logo}
              style={{
                borderRadius: 4,
                border: "1px solid white",
              }}
            />
          }
          hoverable={true}
          bodyStyle={{ display: "none" }}
        />
        <Menu mode="inline" style={{ minHeight: "50vh", textAlign: "right" }}>
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
          <Menu.Item key="special-thanks">
            <Link to="/special-thanks">Special Thanks</Link>
          </Menu.Item>
          <Menu.Item key="creator">
            <a
              href="https://rec.net/user/outruncolors"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaUserAlt style={{ marginRight: 6 }} /> @outruncolors
            </a>
          </Menu.Item>
          <Menu.Item key="room">
            <a
              href="https://rec.net/room/NotSoFinalFantasy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center" }}
            >
              <RiHome2Fill style={{ marginRight: 6 }} /> ^NotSoFinalFantasy
            </a>
          </Menu.Item>
          <Menu.Item key="github">
            <a
              href="https://github.com/outruncolors/notsofinalfantasy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center" }}
            >
              <AiFillGithub style={{ marginRight: 6 }} /> GitHub
            </a>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout.Content>
        <Page>
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
          <Route
            path="/special-thanks"
            exact={true}
            component={SpecialThanks}
          />
        </Page>
        <Layout.Footer
          style={{ background: "transparent", textAlign: "right" }}
        >
          <span>Copyright © 2021 Outrun Colors, LLC. All rights reserved.</span>
        </Layout.Footer>
      </Layout.Content>
    </Layout>
  );
}

export default App;
