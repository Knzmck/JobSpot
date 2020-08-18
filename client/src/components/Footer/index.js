import React from "react";
import { Container, List } from "semantic-ui-react";
import "./Footer.css";

export default function Footer() {
  return (
    <Container id="footer-container">
      <List id="footer-list">
        <List.Item id="github"
          as="a"
          href="https://github.com/anverch/jobspot"
          target="_blank"
        >
          GitHub Repository
          </List.Item>
      </List>
      <p>
        Copyright 2020 Emily Wirtz, Aleks Saiyan, Emily Carlisle, & Mackenzie
        Schutz
        </p>

    </Container>
  );
}
