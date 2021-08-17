import { Modal, Button } from "react-bootstrap";
import EditForm from "./EditForm";
import { useState, useContext } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";

const Employee = ({ employee }) => {
  const [isShowModal, setShowModal] = useState(false);

  const { deleteEmployee } = useContext(EmployeeContext);

  return (
    <>
      <tr key={employee.id}>
        <td>{employee.name}</td>
        <td>{employee.email}</td>
        <td>{employee.address}</td>
        <td>{employee.phone}</td>
        <td>
          <button
            onClick={() => setShowModal(true)}
            className="btn text-warning btn-act"
            data-toggle="modal"
          >
            <i className="material-icons" data-toggle="tooltip" title="Edit">
              &#xE254;
            </i>
          </button>
          <button
            className="btn text-danger btn-act"
            data-toggle="modal"
            onClick={() => deleteEmployee(employee.id)}
          >
            <i className="material-icons" data-toggle="tooltip" title="Delete">
              &#xE872;
            </i>
          </button>
        </td>
      </tr>

      <Modal show={isShowModal}>
        <Modal.Header closeButton onClick={() => setShowModal(false)}>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm employee={employee} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Employee;
