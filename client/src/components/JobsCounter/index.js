import React, { useState, useContext } from "react";
import { Label, Menu } from "semantic-ui-react";
import { useUserContext } from "../../utils/UserContext";

export default function JobsCounter() {
  const { user } = useUserContext();
  console.log(`user.jobs:>>`, user.jobs);

  const [activeItem, setActiveItem] = useState({
    activeItem: "",
  });

  return (
    <Menu fluid vertical inverted color="yellow">
      <Menu.Item
        name="interested"
        active={activeItem === "interested"}
        onClick={() => setActiveItem({ activeItem: "interested" })}
      >
        <Label color="teal">34</Label>
        Interested
      </Menu.Item>
      <Menu.Item
        name="applied"
        active={activeItem === "applied"}
        onClick={() => setActiveItem({ activeItem: "applied" })}
      >
        <Label color="blue">29</Label>
        Applied
      </Menu.Item>
      <Menu.Item
        name="in process"
        active={activeItem === "in process"}
        onClick={() => setActiveItem({ activeItem: "in process" })}
      >
        <Label color="green">8</Label>
        In Process
      </Menu.Item>
      <Menu.Item
        name="outcome reached"
        active={activeItem === "outcome reached"}
        onClick={() => setActiveItem({ activeItem: "outcome reached" })}
      >
        <Label color="grey">3</Label>
        Outcome Reached
      </Menu.Item>
      <Menu.Item
        name="create"
        active={activeItem === "create"}
        onClick={() => setActiveItem({ activeItem: "create" })}
      >
        <Label color="orange">Add</Label>
        Add a new job
      </Menu.Item>
    </Menu>
  );
}