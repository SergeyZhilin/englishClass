import React from "react";
import { Col, Form } from "react-bootstrap";

export default function SelectLevelsComponent({ label, handleChange }) {
  return (
    <Form.Group as={Col} className="mb-lg-4">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="select"
        defaultValue="Choose..."
        name="englishDefault"
        onChange={handleChange}
      >
        <option disabled>Choose...</option>
        <option value="beginner">Beginner</option>
        <option value="elementary">Elementary</option>
        <option value="pre-intermediate">Pre-Intermediate</option>
        <option value="intermediate">Intermediate</option>
        <option value="upper-intermediate">Upper Intermediate</option>
        <option value="advanced">Advanced</option>
        {/* <option value='mastery'>Mastery</option> */}
      </Form.Control>
    </Form.Group>
  );
}
