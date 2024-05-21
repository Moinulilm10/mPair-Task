import Chart from "./Chart";
import ExpenseCard from "./ExpenseCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center gap-14">
      <ExpenseCard />
      <Chart />
    </div>
  );
};

export default Dashboard;
