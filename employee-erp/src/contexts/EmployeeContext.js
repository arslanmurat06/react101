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
      email: "murat@mail.com",
      address: "1166 Cad Nergis Konut Turkiye",
      phone: "(507) 562-7437",
    },
  ]);

  return (
    <EmployeeContext.Provider value={{ employees }}>
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
