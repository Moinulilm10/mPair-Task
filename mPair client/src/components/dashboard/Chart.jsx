import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "January",
    debit: 70,
    credit: 120,
    amount: 250,
  },
  {
    name: "February",
    debit: 130,
    credit: 180,
    amount: 250,
  },
  {
    name: "March",
    debit: 45,
    credit: 95,
    amount: 250,
  },
  {
    name: "April",
    debit: 90,
    credit: 140,
    amount: 250,
  },
  {
    name: "May",
    debit: 160,
    credit: 210,
    amount: 250,
  },
  {
    name: "June",
    debit: 10,
    credit: 60,
    amount: 250,
  },
  {
    name: "July",
    debit: 30,
    credit: 80,
    amount: 250,
  },
  {
    name: "August",
    debit: 110,
    credit: 160,
    amount: 250,
  },
  {
    name: "September",
    debit: 20,
    credit: 70,
    amount: 250,
  },
  {
    name: "October",
    debit: 100,
    credit: 150,
    amount: 250,
  },
  {
    name: "November",
    debit: 200,
    credit: 250,
    amount: 250,
  },
  {
    name: "December",
    debit: 75,
    credit: 125,
    amount: 250,
  },
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, value } = props;
  const radius = 10;

  return (
    <g>
      {/* <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" /> */}
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.split(" ")[1]}
      </text>
    </g>
  );
};

const Chart = () => {
  return (
    <>
      <BarChart
        width={1150}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="debit" fill="#FF8E5E" minPointSize={10} />
        <Bar dataKey="credit" fill="#52E30E" minPointSize={5}>
          <LabelList dataKey="name" content={renderCustomizedLabel} />
        </Bar>
      </BarChart>
    </>
  );
};

export default Chart;
