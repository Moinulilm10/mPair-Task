import Accounting from "./components/Accounting/Accounting";
import NavBar from "./components/shared/Navbar";
import Sidebar from "./components/shared/Sidebar";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-5">
          {/* <Dashboard /> */}
          <Accounting />
          <h1>Profile</h1>
          <h1>Register</h1>
          <h1>Login</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
