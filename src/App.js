import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/Login";
import Layout from "./layout";
import Homepage from "./pages/Homepage";
import Orders from "./pages/Orders";
import AccountPending from "./pages/AccountPending";
import ResetPassword from "./pages/ResetPassword";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/resetpass" element={<ResetPassword/>} />
        <Route path="/ap" element={<AccountPending/>}/>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >

          <Route index element={<Homepage />}></Route>
          <Route path="orders" element={<Orders />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
