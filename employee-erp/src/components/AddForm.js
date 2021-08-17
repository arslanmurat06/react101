import { Form, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";

const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const { name, email, phone, address } = newEmployee;

  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, phone, address);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group style={{ marginBottom: 10 }}>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group style={{ marginBottom: 10 }}>
        <Form.Control
          type="email"
          placeholder="Email *"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
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
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Button variant="success" type="submit" block style={{ marginTop: 50 }}>
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddForm;
