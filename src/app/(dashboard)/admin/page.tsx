import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { nowDate } from "@/lib/utils";
import { IconFriends, IconSchool, IconUsers } from "@tabler/icons-react";
const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* 左侧  */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* 用户数统计 */}
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              date={nowDate()}
            />
          ))}
        </BentoGrid>
        {/* 中间图表 */}
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* 底部图表 */}
        <div className=""></div>
      </div>
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};
const items = [
  {
    title: "6166",
    description: "Students",
    icon: <IconSchool className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "3500",
    description: "Teachers",
    icon: <IconUsers className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "4800",
    description: "Parents",
    icon: <IconFriends className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "9800",
    description: "Staffs",
    icon: <IconUsers className="h-8 w-8 text-neutral-500" />,
  },
];
export default AdminPage;
