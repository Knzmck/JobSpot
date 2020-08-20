import React, { useState } from "react";
import { Header, Form, Button } from "semantic-ui-react";
import "./JobForm.css";
import { useUserContext } from "../../utils/GlobalState";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";

const yesNoOptions = [
  { key: "y", text: "Yes", value: "yes" },
  { key: "n", text: "No", value: "no" },
];

const jobStatusOptions = [
  {
    key: "Interested",
    text: "Interested",
    value: "Interested",
  },
  {
    key: "Applied",
    text: "Applied",
    value: "Applied",
  },
  {
    key: "In Process",
    text: "In Process",
    value: "In Process",
  },
  {
    key: "Closed",
    text: "Closed",
    value: "Closed",
  },
];

export default function JobForm() {
  const history = useHistory();
  const [state, dispatch] = useUserContext();
  const [dateTime, setDateTime] = useState({
    date: 0,
    time: 0,
  });

  const [newJob, setNewJob] = useState({
    company: "",
    job_title: "",
    salary: null,
    status: "",
    phone: null,
    in_person_interview_date: null,
    benefits: "",
    location: "",
    source: "",
    notes: "",
    UserId: JSON.parse(localStorage.getItem("user")).data.id,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    API.saveJob(newJob).then((res) => res.json);
    history.push("/home");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "time") {
      setNewJob({
        ...newJob,
        in_person_interview_date: `${dateTime.date} ${value}:00`,
      });
      setDateTime({ ...dateTime, time: value });
      return;
    }
    if (name === "date") {
      setNewJob({
        ...newJob,
        in_person_interview_date: `${value} ${dateTime.time}`,
      });
      setDateTime({ ...dateTime, date: value });
      return;
    }
    setNewJob({ ...newJob, [name]: value });
  };

  const handleDropdownChange = (event, data) => {
    const label = data.id;
    const choice = data.value;
    setNewJob({ ...newJob, [label]: choice });
  };

  return (
    <div>
      <Header as="h1">Job Info</Header>
      <Form id="jobForm" onSubmit={handleSubmit}>
        <Form.Input
          label="Company name"
          name="company"
          onChange={handleInputChange}
          required
          type="text"
        />
        <Form.Input
          label="Job title"
          placeholder="e.g. React Developer"
          name="job_title"
          required
          onChange={handleInputChange}
          type="text"
        />
        <Form.Input
          label="Annual salary"
          name="salary"
          onChange={handleInputChange}
          required
          maxLength="7"
          type="number"
        />
        <Form.Select
          label="Job Status"
          options={jobStatusOptions}
          placeholder="Select Job Status"
          id="status"
          required
          onChange={handleDropdownChange}
        />
        <Form.Select
          label="Full Benefits Offered?"
          options={yesNoOptions}
          id="benefits"
          onChange={handleDropdownChange}
        />
        <Form.Input
          label="Location"
          placeholder="e.g. San Francisco, CA; Remote"
          name="location"
          required
          onChange={handleInputChange}
          type="text"
        />
        <Header as="h3">Interview Dates</Header>
        <Form.Input
          label="Phone Number for Interviewer (optional)"
          placeholder="8165009876"
          name="phone"
          onChange={handleInputChange}
          type="number"
        />
        <Form.Input
          label="Interview Date"
          placeholder="e.g. 7/10/2020"
          name="in_person_interview_date"
          type="date"
          onChange={handleInputChange}
        />
        <Form.Input
          label="Interview Time"
          placeholder=""
          name="time"
          type="time"
          onChange={handleInputChange}
        />
        <Form.TextArea
          label="Notes"
          rows="3"
          placeholder="e.g. Long commute, 4 direct reports, Commuter benefits, Catered lunches"
          name="notes"
          onChange={handleInputChange}
          type="text"
        />
        <Form.Input
          label="Source"
          placeholder="e.g. Indeed, JobMonster"
          name="source"
          onChange={handleInputChange}
          type="text"
        />
        <Button type="submit" color="yellow" size="large">
          Submit
        </Button>
      </Form>
    </div>
  );
}
