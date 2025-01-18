import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 260],
  ["2016", 660, 1120, 460],
  ["2017", 1030, 540, 490],
  ["2018", 1030, 540, 490],
  ["2019", 1030, 540, 490],
  ["2020", 1030, 540, 490],
  ["2021", 1030, 540, 490],
  ["2022", 1030, 540, 490],
  ["2023", 1030, 540, 490],
];

// Material chart options
const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales and Expenses over the Years",
  },
  colors: ["#0088FE", "#00C49F", "#FFBB28"],
};

const BarChart = () => {
  return (
    <Chart
      width={"100%"}
      height={"350px"}
      // Note the usage of Bar and not BarChart for the material version
      chartType="Bar"
      data={data}
      options={options}
    />
  );
};

export default BarChart;
