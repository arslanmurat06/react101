import Employee from "./Employee";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext } from "react";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);
  return (
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
  );
};

export default EmployeeList;
