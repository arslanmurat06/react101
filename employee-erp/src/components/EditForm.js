import { Form, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";

const EditForm = ({ employee }) => {
  const { updateEmployee } = useContext(EmployeeContext);

  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [address, setAddress] = useState(employee.address);
  const [phone, setPhone] = useState(employee.phone);

  const id = employee.id;
  const handleSubmit = (e) => {
    updateEmployee(employee.id, { id, name, email, address, phone });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group style={{ marginBottom: 10 }}>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group style={{ marginBottom: 10 }}>
        <Form.Control
          type="email"
          placeholder="Email *"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group style={{ marginBottom: 10 }}>
        <Form.Control
          as="textarea"
          placeholder="Address"
          rows={3}
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit" block style={{ marginTop: 50 }}>
        Edit Employee
      </Button>
    </Form>
  );
};

export default EditForm;
