import { BrowserRouter, Route, Routes } from "react-router-dom";

import Accounting from "./components/Accounting/Accounting";
import Profile from "./components/Profile";
import Report from "./components/Report/Report";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Layout from "./layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/report" element={<Report />} />
          <Route index element={<Profile />} />

          <Route index element={<Login />} />

          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
