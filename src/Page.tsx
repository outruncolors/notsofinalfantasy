import { Button, Divider } from "antd";
import { RiHome2Fill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { ReactNode } from "react";

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="Page">
      {children}
      <Divider />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: 12,
        }}
      >
        <Button style={{ marginRight: 12 }}>
          <a
            href="https://rec.net/user/outruncolors"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FaUserAlt style={{ marginRight: 6 }} /> View Creator on Rec.net
          </a>
        </Button>
        <Button style={{ marginRight: 12 }}>
          <a
            href="https://rec.net/room/NotSoFinalFantasy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center" }}
          >
            <RiHome2Fill style={{ marginRight: 6 }} /> View Room on Rec.net
          </a>
        </Button>
        <Button style={{ marginRight: 12 }}>
          <a
            href="https://github.com/outruncolors/notsofinalfantasy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center" }}
          >
            <AiFillGithub style={{ marginRight: 6 }} /> View Repo on GitHub
          </a>
        </Button>

        <span>Copyright © 2021 Outrun Colors, LLC. All rights reserved.</span>
      </div>
    </div>
  );
}
