import { Posts } from "./components/Posts";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Write } from "./pages/Write";

function App() {
  return (
    <>
      <Topbar />
      {/* <Home /> */}
      <Write />
    </>
  );
}

export default App;
