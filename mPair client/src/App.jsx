import NavBar from "./components/shared/Navbar";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1">
        <h1>Sidebar</h1>
        <div className="flex-1 p-5">
          <h1>Profile</h1>
          <h1>Register</h1>
          <h1>Login</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
