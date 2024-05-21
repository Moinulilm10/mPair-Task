import avatar from "../assets/avatar.jpg";

const Profile = () => {
  return (
    <div className="flex max-h-[auto] h-screen">
      {/* <Sidebar /> */}
      <div>
        <div className="m-5 text-xl font-bold">
          <h3 className="text-gray-600">Profile Information</h3>
        </div>

        <div className="w-1/2 mx-44">
          <div className="flex justify-center w-2/3">
            <img src={avatar} className="w-24 h-24 rounded-full" alt="" />
          </div>

          <div className="my-2">
            <p className="text-sm text-gray-400">Full Name</p>
            <h3 className="font-bold text-gray-600">Aminul Islam</h3>
          </div>

          <div className="my-2">
            <p className="text-sm text-gray-400">Position</p>
            <h3 className="font-bold text-gray-600">Accounts Manager</h3>
          </div>

          <div className="my-3">
            <p className="text-sm text-gray-400">Gender</p>
            <h3 className="font-bold text-gray-600">Male</h3>
          </div>

          <div className="my-3">
            <p className="text-sm text-gray-400">Date Of Birth</p>
            <h3 className="font-bold text-gray-600">12-01-1996</h3>
          </div>

          <div className="my-3">
            <p className="text-sm text-gray-400">Email</p>
            <h3 className="font-bold text-gray-600">Aminulislam@gmail.com</h3>
          </div>

          <div className="my-3">
            <p className="text-sm text-gray-400">Employee ID</p>
            <h3 className="font-bold text-gray-600">983465</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
