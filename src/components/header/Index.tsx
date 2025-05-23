"use client";
import { PlusCircle } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {
  return (
    <div className="flex justify-between h-[60px] px-6 items-center bg-[#fafafa] shadow-[rgba(0,0,0,0.05)_0px_0px_0px_1px]">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <PlusCircle />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="left-[-10px]">
          <DropdownMenuItem onClick={() => {}}>
            Create category
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => {}}>Create product</DropdownMenuItem>
          <DropdownMenuItem onClick={() => {}}>Create size</DropdownMenuItem>
          <DropdownMenuItem onClick={() => {}}>Create color</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Avatar className="w-[40px] h-[40px] cursor-pointer">
            <AvatarImage src={"/favicon.ico"} />
            <AvatarFallback>T</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </div>
  );
};

export default Header;
