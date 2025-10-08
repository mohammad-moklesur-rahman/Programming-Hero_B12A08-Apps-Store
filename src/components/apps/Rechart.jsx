import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const Rechart = ({ratings}) => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={ratings}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Bar dataKey="count" barSize={20} fill="#FF8811" />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default Rechart;
