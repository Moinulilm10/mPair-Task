const AccountHead = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[#5E5E5E] text-2xl font-bold">Account Head</h1>
      <div className="flex flex-col gap-[10px]">
        <div className="card w-[169px] h-[27px] bg-[#ECEDFA] text-primary-content rounded-sm">
          <p className="text-[#5E5E5E] font-semibold pl-4">Transportation</p>
        </div>
        <div className="card w-[169px] h-[27px] bg-[#ECEDFA] text-primary-content rounded-sm">
          <p className="text-[#5E5E5E] font-semibold pl-4">Office Management</p>
        </div>
        <div className="card w-[169px] h-[27px] bg-[#ECEDFA] text-primary-content rounded-sm">
          <p className="text-[#5E5E5E] font-semibold pl-4">Courier Cost</p>
        </div>
        <div className="card w-[169px] h-[27px] bg-[#ECEDFA] text-primary-content rounded-sm">
          <p className="text-[#5E5E5E] font-semibold pl-4">Stationary</p>
        </div>
        <div className="card w-[169px] h-[27px] bg-[#ECEDFA] text-primary-content rounded-sm">
          <p className="text-[#5E5E5E] font-semibold pl-4">Food</p>
        </div>
        <button className="outline-none w-[169px] h-[35px] rounded-r-md ">
          <p className="text-[#2397C8] font-medium text-sm">Add Account Head</p>
        </button>
      </div>
    </div>
  );
};

export default AccountHead;
