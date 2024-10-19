import BarChart from "@/components/bar-chart/page";
import LineChart from "@/components/line-chart/page";
export default function DashBoard({ params }: { params: { type: string } }) {
  switch (params.type) {
    case "line":
      return (
        <>
          <LineChart />
        </>
      );
    case "bar":
      return (
        <>
          <BarChart />
        </>
      );
    default:
      return (
        <>
          {params.type}
          <LineChart />
        </>
      );
  }
}
