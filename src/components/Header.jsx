import { Typography } from "antd";
import React from "react";
const { Title } = Typography;

function Header() {
  return (
    <div className="navbar">
      <Title style={{ textAlign: "center", padding: "20px" }}>
        Spend Bill Gates' Money
      </Title>
    </div>
  );
}

export default Header;
