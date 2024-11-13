const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">More</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-500 pt-2">
            The colorful balloons are floating gently in the clear
            sky.（彩色的气球在晴朗的天空中轻轻飘荡。）
          </p>
        </div>

        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">More</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-500 pt-2">
            The warm sunshine is pouring through the window, casting a golden
            glow on the cozy little
            room.（温暖的阳光透过窗户洒进来，在舒适的小房间里投下一片金色的光辉。）
          </p>
        </div>

        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">More</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-500 pt-2">
            The childs eyes are like two bright stars shining in the dark night,
            full of curiosity and
            innocence.（这个孩子的眼睛就像两颗在黑夜中闪耀的明亮星星，充满了好奇与纯真。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
