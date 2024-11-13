"use client";
import Image from "next/image";
import { Input } from "./ui/Input";

const Navbar = () => {
  const placeholders = ["试着查一下菜单项?", "欢迎来扰?"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex items-center justify-between p-4 bg-white sticky top-0 z-10">
      {/* 搜索框 */}
      <div className="hidden md:block">
        <Input
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
      {/* icon */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="消息" width={20} height={20} />
        </div>
        <div className="bg-white relative rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/announcement.png" alt="消息" width={20} height={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-purple-500 text-white text-sm flex justify-center items-center">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Jian</span>
          <span className="text-[10px] text-gray-500 text-right">Chen</span>
        </div>

        <Image
          src="/avatar.png"
          alt="头像"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
