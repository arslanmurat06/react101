import { createContext, useState } from "react";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Thomas Hardy",
      email: "thomashardy@mail.com",
      address: "89 Chiaroscuro Rd, Portland, USA",
      phone: "(171) 555-2222",
    },
    {
      id: 2,
      name: "Murat ARSLAN",
      email: "arslanmurat@live.com",
      address: "1566 Cad Gül Konut Turkiye",
      phone: "(507) 562-7437",
    },
  ]);

  const addEmployee = (name, email, phone, address) => {
    setEmployees([...employees, { id: 3, name, email, phone, address }]);
  };

  const updateEmployee = (id, updatedEmployee) => {
    setEmployees(employees.map((e) => (e.id === id ? updatedEmployee : e)));
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((e) => e.id !== id));
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, updateEmployee, deleteEmployee }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
