import { Topbar } from "./components/Topbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Settings } from "./pages/Settings";
import { Write } from "./pages/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Single } from "./pages/Single";
import { PostDTO } from "./types/PostDTO";
import { useAppSelector } from "./store";

function App() {
  const userSlice = useAppSelector((state) => state.users);

  const user = false;
  const userWrite = true;
  return (
    <>
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/write">
            {userSlice.loggedIn ? <Write /> : <Login />}
          </Route>
          <Route path="/settings">
            {userSlice.loggedIn ? <Settings /> : <Login />}
          </Route>
          <Route path="/login">
            {userSlice.loggedIn ? <Home /> : <Login />}
          </Route>
          <Route path="/register">
            {userSlice.loggedIn ? <Home /> : <Register />}
          </Route>
          <Route path="/post/:postID">
            <Single />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
