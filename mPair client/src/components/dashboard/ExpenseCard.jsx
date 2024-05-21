const ExpenseCard = () => {
  return (
    <div className="flex flex-row gap-4">
      <div className="card w-96 text-primary-content bg-[#F6DBDB]">
        <div className="flex flex-col gap-8 card-body">
          <h2 className="text-3xl font-bold text-[#FF5F5F] ml-36">
            20,700 Taka
          </h2>
          <div className="flex flex-col justify-start gap-1 card-actions">
            <h3 className="text-2xl font-bold text-gray-600">Total Debit</h3>
            <p>This month</p>
          </div>
        </div>
      </div>
      <div className="card w-96 text-primary-content bg-[#E0F6DB]">
        <div className="flex flex-col gap-8 card-body">
          <h2 className="text-3xl font-bold text-[#21DF10] ml-36">
            31,700 Taka
          </h2>
          <div className="flex flex-col justify-start gap-1 card-actions">
            <h3 className="text-2xl font-bold text-gray-600">Total Credit</h3>
            <p>This month</p>
          </div>
        </div>
      </div>
      <div className="card w-96 text-primary-content bg-[#F6EBDB]">
        <div className="flex flex-col gap-8 card-body">
          <h2 className="text-3xl font-bold text-[#E49700] ml-36">
            34,200 Taka
          </h2>
          <div className="flex flex-col justify-start gap-1 card-actions">
            <h3 className="text-2xl font-bold text-gray-600">Total Amount</h3>
            <p>This month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
