import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* 左侧  */}
      <div className="w-full lg:w-2/3">
        {/* <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid> */}
      </div>
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};

export default AdminPage;
