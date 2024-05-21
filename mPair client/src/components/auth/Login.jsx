const Login = () => {
  // const [employeeID, setEmployeeID] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  // const navigate = useNavigate();
  // const { login } = useContext(AuthContext);

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");

  //   try {
  //     const response = await fetch("http://localhost:4000/api/user/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ eid: employeeID, password }),
  //     });

  //     const data = await response.json();

  //     if (data.message === "Login Successful !") {
  //       toast.success(data.message);
  //       localStorage.setItem("token", data.token);
  //       login();
  //       navigate("/");
  //     } else {
  //       toast.error(data.message);
  //     }
  //   } catch (err) {
  //     setError("An error occurred during login. Please try again later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div>
      <div
        className="w-[414px] p-10 mx-auto border-blue-400 border-t-4 mt-10"
        style={{ background: "rgba(244, 250, 252, 1)" }}
      >
        <div className="w-[328px]">
          <div className="mb-8">
            <h4
              className="my-2 text-xl font-bold"
              style={{ color: "rgba(35, 151, 200, 1)" }}
            >
              Welcome to PureLedger
            </h4>
            <p
              className="my-2 text-base"
              style={{ color: "rgba(158, 158, 158, 1)" }}
            >
              Please Login to continue
            </p>
          </div>

          <form>
            <div className="py-2">
              <label htmlFor="eid">
                Employee ID
                <input
                  type="text"
                  placeholder="Enter Employee ID here"
                  name="eid"
                  className="w-full mt-2 rounded-md input input-bordered"
                  required
                  // value={employeeID}
                  // onChange={(e) => setEmployeeID(e.target.value)}
                />
              </label>
            </div>

            <div className="py-2">
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  placeholder="Enter Password here"
                  name="password"
                  className="w-full rounded-md input input-bordered"
                  required
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>

            {/* {error && <div className="my-2 text-sm text-red-500">{error}</div>} */}

            <div>
              <button
                type="submit"
                className="w-full h-8 text-white rounded mt-7"
                style={{ background: "rgba(35, 151, 200, 1)" }}
                // disabled={loading}
              >
                {/* {loading ? "Logging in..." : "Login"} */}
              </button>
            </div>
          </form>

          <div className="flex justify-center gap-2 mt-8 text-sm">
            <p style={{ color: "rgba(158, 158, 158, 1)" }}>
              Don’t have an account?
            </p>
            <p
              className="cursor-pointer"
              style={{ color: "rgba(35, 151, 200, 1)" }}
              // onClick={() => navigate("/register")}
            >
              Register Now!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
