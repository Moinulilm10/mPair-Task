import AccountHead from "./AccountHead";
import AddAccounting from "./AddAccounting";

const Accounting = () => {
  return (
    <div className="bg-gray-100 card w-[700] text-primary-content">
      <div className="flex flex-row justify-center gap-4 card-body">
        <AddAccounting />
        <div className="text-black divider divider-horizontal"></div>
        <AccountHead />
      </div>
    </div>
  );
};

export default Accounting;
