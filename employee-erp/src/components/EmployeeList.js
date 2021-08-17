import Employee from "./Employee";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState, useEffect } from "react";
import { Button, Modal, Alert } from "react-bootstrap";
import AddForm from "./AddForm";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);
  const [isShowModal, setShowModal] = useState(false);
  const [isShowAlert, setShowAlert] = useState(false);

  useEffect(() => {
    console.log("useeffecte geldi");
    return () => {
      setShowModal(false);
    };
  }, [employees]);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      handleShowAlert();
    };
  }, [employees]);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              className="btn btn-success"
              data-toggle="modal"
              onClick={() => setShowModal(true)}
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
      <Alert
        variant="success"
        show={isShowAlert}
        onClose={() => isShowAlert(false)}
        dismissible
      >
        <Alert.Heading>Successfull created</Alert.Heading>
      </Alert>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <Employee key={employee.id} employee={employee} />
          ))}
        </tbody>
      </table>
      <Modal show={isShowModal}>
        <Modal.Header closeButton onClick={() => setShowModal(false)}>
          <Modal.Title>Add New Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EmployeeList;
