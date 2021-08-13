import "./App.css";
import EmployeeList from "./components/EmployeeList";
import Header from "./components/header";
import EmployeeContextProvider from "./contexts/EmployeeContext";

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <EmployeeContextProvider>
            <Header />
            <EmployeeList />
          </EmployeeContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
