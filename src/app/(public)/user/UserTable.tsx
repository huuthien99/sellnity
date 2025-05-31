"use client";
import ArrowClockWise from "@/components/icons/ArrowClockWise";

function UserTable() {
  return (
    <div className="border-r border-[#D9D9D9] w-1/2  min-h-[calc(100vh-60px)] flex flex-col">
      <div className="flex items-center pt-[18px] pl-4 gap-2.5">
        <p className="text-[#294172] font-bold text-[20px] ">43 USERS</p>
        <ArrowClockWise />
      </div>
    </div>
  );
}

export default UserTable;
